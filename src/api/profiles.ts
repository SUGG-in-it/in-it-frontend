import { GET, PUT } from '@/api/config/base';
import { ProfileRequestBody } from '@/types/request/profiles';

export const getProfile = async (nickname: string) => {
  return await GET(`/users/profiles/${nickname}`)
    .then((res) => res.data)
    .catch((e) => {
      return e;
    });
};

export const editProfile = async (profileRequestBody: ProfileRequestBody) =>
  await PUT(`/users/profiles`, profileRequestBody);
