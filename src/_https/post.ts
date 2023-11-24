import { API } from './_config';

// 문의하기
export const createContactUs = async ({
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
