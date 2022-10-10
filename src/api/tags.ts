import { GET } from '@/api/config/base';

export const getTags = async (type: string) => {
  return await GET('/tags', { type })
    .then((res) => res.data)
    .catch((e) => {
      return e;
    });
};
