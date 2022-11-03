import { GET } from '@/api/config/base';

export const getTags = async (type: string) => {
  const { data } = await GET('/tags', { type });
  return data;
};
