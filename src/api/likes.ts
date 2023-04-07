import { POST } from '@/api/config/base';

export const likeQuestion = async (questionId: string) => {
  const { data } = await POST(`/like/${questionId}/add`);
  return data;
};

export const unLikeQuestion = async (questionId: string) => await POST(`/like/${questionId}/cancel`);
