import { useRef } from 'react';

//keys
import { QUERY_KEYS } from '@/libs/utils/queryKeys';

//hooks
import { useInfiniteQuery } from 'react-query';
import { fetchGetAllGallery } from '../apis';
import { useObserver } from '@/libs/hooks/useIntersectionObserver';

//
export function galleryQuery() {
  const refs = useRef(null);

  //
  ///  리스트
  const { data, fetchNextPage, isLoading } = useInfiniteQuery(
    [QUERY_KEYS?.gallery],
    ({ pageParam = 0 }) => fetchGetAllGallery({ pageToken: pageParam }),
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

  return { refs, isLoading, data };
}
