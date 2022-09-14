import { GET, POST } from '@/api/config/base';
import { QusetionsRequestBody } from '@/types/request/questions';

export const getQusetions = async (qusetionsRequestBody: QusetionsRequestBody) => {
  return await GET('/questions', qusetionsRequestBody)
    .then((res) => res.data)
    .catch((e) => {
      return e;
    });
};

export const postQuestionId = async () => await POST('/questions');
