import { GET } from '@/api/config/base';

export const getProfile = async (nickname: string) => {
  return await GET(`/users/profiles/${nickname}`)
    .then((res) => res.data)
    .catch((e) => {
      return e;
    });
};
