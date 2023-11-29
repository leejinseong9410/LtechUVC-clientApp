//hooks
import { useQuery } from 'react-query';
import { fetchGetAllHomeItmes, fetchGetAllNotice, fetchPopUpNotice } from '../apis';

//
export function homeQuery() {
  const { data, isLoading } = useQuery(['home-items'], () => fetchGetAllHomeItmes(), {
    onSuccess: () => {},
    keepPreviousData: true,
  });

  return { data, isLoading };
}
