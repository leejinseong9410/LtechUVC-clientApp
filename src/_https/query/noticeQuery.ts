import { useRef } from 'react';
import { useRouter } from 'next/router';

//hooks
import { useQuery } from 'react-query';
import { fetchGetAllNotice, fetchPopUpNotice } from '../apis';

//
export function noticeQuery() {
  const router = useRouter();

  const { data, isLoading } = useQuery(
    ['notice-items', router.query.page],
    () => fetchGetAllNotice({ pageToken: router.query.page }),
    { onSuccess: () => {}, keepPreviousData: true },
  );

  const { data: alartData } = useQuery(['notice-popup-keys'], () => fetchPopUpNotice(), {
    onSuccess: () => {},
    keepPreviousData: true,
  });
  return { data, isLoading, alartData };
}
