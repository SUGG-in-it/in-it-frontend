import { GET, POST, PUT } from '@/api/config/base';
import { QusetionsRequestBody, UploadQuestionRequestBody } from '@/types/request/questions';

export const getQusetions = async (qusetionsRequestBody: QusetionsRequestBody) => {
  return await GET('/questions', qusetionsRequestBody)
    .then((res) => res.data)
    .catch((e) => {
      return e;
    });
};

export const postQuestionId = async () => await POST('/questions');

export const uploadQuestion = async ({ questionId, title, content, tagList, point }: UploadQuestionRequestBody) =>
  await PUT(`/questions/${questionId}`, { title, content, tagList, point, email: 'wldud060960@gmail.com' });
