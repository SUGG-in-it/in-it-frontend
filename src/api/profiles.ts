import { GET, PUT } from '@/api/config/base';
import { ProfileRequestBody } from '@/types/request/profiles';

export const getProfile = async (nickname: string) => {
  const { data } = await GET(`/users/profiles/${nickname}`);
  return data;
};

export const editProfile = async (profileRequestBody: ProfileRequestBody) =>
  await PUT(`/users/profiles`, profileRequestBody);
