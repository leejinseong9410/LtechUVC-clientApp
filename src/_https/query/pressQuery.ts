import { useRef } from 'react';
import { useRouter } from 'next/router';

//hooks
import { useInfiniteQuery, useQuery } from 'react-query';
import { fetchGetAllPress, fetchGetPressDetail } from '../apis';
import { useObserver } from '@/libs/hooks/useIntersectionObserver';

//
export function pressQuery() {
  const router = useRouter();
  const refs = useRef(null);

  //
  ///  데이터 리스트
  const { data, fetchNextPage, isLoading } = useInfiniteQuery(
    ['press-items'],
    ({ pageParam = 0 }) => fetchGetAllPress({ pageToken: pageParam }),
    {
      getNextPageParam: (lastPage) => {
        const { nextPageToken } = lastPage;
        if (nextPageToken !== -1) {
          return nextPageToken;
        } else {
          return undefined;
        }
      },
      onSuccess: (data) => {},
      onError: (error) => {},
      keepPreviousData: true,
    },
  );

  // 옵저버 > 관측
  const onIntersect: IntersectionObserverCallback = ([entry], observer) => {
    if (data && data?.pages[data?.pages?.length - 1].nextPageToken !== -1) {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        fetchNextPage();
      }
    } else {
    }
  };

  // 옵저버 > 동작
  useObserver({
    target: refs,
    onIntersect,
  });

  //
  /// 프로젝트 > 상세
  const { data: detailData, isLoading: detailLoading } = useQuery(
    ['press-detail'],
    () => fetchGetPressDetail(router.query.id),
    { enabled: !!router.query.id },
  );

  return { refs, isLoading, data, detailData, detailLoading };
}
