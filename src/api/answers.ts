import { DELETE, GET, POST, PUT } from '@/api/config/base';
import {
  AnswerPageRequestParams,
  AnswersRequestParams,
  UploadAnswerRequestBody,
  UserAnswersRequestParams,
} from '@/types/request/answers';

export const postAnswerId = async (questionId: number) =>
  await POST('/answers', { questionId })
    .then((res) => res)
    .catch((e) => console.log(e));

export const uploadAnswer = async ({ answerId, content }: UploadAnswerRequestBody) =>
  await PUT(`/answers/${answerId}`, { content });

export const getAnswers = async (answersRequestParams: AnswersRequestParams) => {
  const { data } = await GET('/answers', answersRequestParams);
  return data;
};

export const getUserAnswers = async (userAnswersRequestParams: UserAnswersRequestParams) => {
  const { data } = await GET('/answers/manage', userAnswersRequestParams);
  return data;
};

export const getAnswerPage = async (answerPageRequestParams: AnswerPageRequestParams) => {
  const { data } = await GET('/answers/page', answerPageRequestParams);
  return data;
};

export const getUserAnswerPage = async (size: number) => {
  const { data } = await GET(`/answers/user-page?size=${size}`);
  return data;
};

export const selectAnswer = async (answerId: number) => {
  await POST(`/answers/select/${answerId}`);
};

export const deleteAnswer = async (answerId: number) => await DELETE(`/answers/${answerId}`);
