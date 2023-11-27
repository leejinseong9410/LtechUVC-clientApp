import { API } from './_config';

//
/// 문의하기
export const fetchCreateContactUs = async ({
  name,
  email,
  title,
  context,
}: {
  name: string;
  email: string;
  title: string;
  context: string;
}) => {
  const result = await API.post('/create-contactUs', { name, email, title, context });
  return result.data;
};

//
/// 프로젝트 > 목록
export const fetchGetAllProjects = async ({ pageToken }: { pageToken: number }) => {
  const result = await API.post(`/getAllProjects`, { pageToken });

  return result.data;
};

//
/// 프로젝트 > 상세
export const fetchGetProjectDetail = async (id: any) => {
  const result = await API.post(`/getProjectDetail`, { id });

  return result.data;
};

//
/// 갤러리 > 목록
export const fetchGetAllGallery = async ({ pageToken }: { pageToken: number }) => {
  const result = await API.post(`/getAllGallery`, { pageToken });

  return result.data;
};

//
/// 유튜브 > 목록
export const fetchGetAllYoutube = async ({ pageToken }: { pageToken: number }) => {
  const result = await API.post(`/getAllYoutube`, { pageToken });

  return result.data;
};

//
/// 보도자료 ? 목록
export const fetchGetAllPress = async ({ pageToken }: { pageToken: number }) => {
  const result = await API.post(`/getAllPress`, { pageToken });

  return result.data;
};

//
/// 보도자료 > 상세
export const fetchGetPressDetail = async (id: any) => {
  const result = await API.post(`/getPressDetail`, { id });

  return result.data;
};
