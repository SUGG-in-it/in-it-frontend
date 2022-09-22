import { GET, POST, PUT } from '@/api/config/base';
import { AnswerPageRequestParams, AnswersRequestParams, UploadAnswerRequestBody } from '@/types/request/answers';

export const postAnswerId = async (questionId: number) => await POST('/answers', { questionId });

export const uploadAnswer = async ({ answerId, content }: UploadAnswerRequestBody) =>
  await PUT(`/answers/${answerId}`, { content });

export const getAnswers = async (answersRequestParams: AnswersRequestParams) => {
  return await GET('/answers', answersRequestParams)
    .then((res) => res.data)
    .catch((e) => {
      return e;
    });
};

export const getAnswerPage = async (answerPageRequestParams: AnswerPageRequestParams) => {
  const { data } = await GET('/answers/page', answerPageRequestParams);
  return data;
};
