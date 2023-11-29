import { useRef } from 'react';

//hooks
import { useInfiniteQuery } from 'react-query';
import { fetchGetAllYoutube } from '../apis';
import { useObserver } from '@/libs/hooks/useIntersectionObserver';

//
export function youtubeQuery() {
  const refs = useRef(null);

  //
  ///  리스트
  const { data, fetchNextPage, isLoading } = useInfiniteQuery(
    ['youtube-items'],
    ({ pageParam = 0 }) => fetchGetAllYoutube({ pageToken: pageParam }),
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
