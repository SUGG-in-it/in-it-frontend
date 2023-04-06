import { POST } from '@/api/config/base';

export const likeQuestion = async (questionId: number) => {
  const { data } = await POST(`/like/${questionId}/add`);
  return data;
};

export const unLikeQuestion = async (questionId: number) => await POST(`/like/${questionId}/cancel`);
