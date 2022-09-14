import { getQusetions } from '@/api/questions';
import { KEYS } from '@/constants/reactQuery';
import { QusetionsRequestBody } from '@/types/request/questions';
import { QuestionsResponseBody } from '@/types/response/questions';
import { useQuery } from '@tanstack/react-query';

export const useQuestionsQuery = (qusetionsRequestBody: QusetionsRequestBody) => {
  return useQuery<QuestionsResponseBody>([KEYS.QUESTIONS], () => getQusetions(qusetionsRequestBody), {
    suspense: true,
  });
};
