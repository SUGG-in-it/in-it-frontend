import { getMainContent, getQusetions } from '@/api/questions';
import { KEYS } from '@/constants/reactQuery';
import { QusetionsRequestBody } from '@/types/request/questions';
import { MainContentResponseBody, QuestionsResponseBody } from '@/types/response/questions';
import { useQueries, useQuery } from '@tanstack/react-query';

export const useQuestions = (qusetionsRequestBody: QusetionsRequestBody) => {
  return useQuery<QuestionsResponseBody>([KEYS.QUESTIONS], () => getQusetions(qusetionsRequestBody), {
    suspense: true,
  });
};

export const useMainContentQueries = () => {
  const types = ['recent', 'point', 'random', 'popular'];

  return useQueries<MainContentResponseBody[]>({
    queries: types.map((type) => {
      return {
        queryKey: [KEYS.MAIN_CONTENT, type],
        queryFn: () => getMainContent(type),
      };
    }),
  });
};
