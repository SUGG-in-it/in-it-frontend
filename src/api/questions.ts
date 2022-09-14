import { GET } from '@/api/config/base';
import { QusetionsRequestBody } from '@/types/request/questions';

export const getQusetions = async (qusetionsRequestBody: QusetionsRequestBody) => {
  const { data } = await GET('/questions', qusetionsRequestBody);
  return data;
};
