import { getQusetions, GetQusetionsParams } from '@/api/questions';
import { KEYS } from '@/constants/reactQuery';
import { useQuery } from '@tanstack/react-query';

export const useQuestions = (questionListParams: GetQusetionsParams) => {
  return useQuery([KEYS.QUESTIONS], () => getQusetions(questionListParams), {
    suspense: true,
  });
};
