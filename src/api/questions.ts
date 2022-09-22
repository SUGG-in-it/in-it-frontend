import { DELETE, GET, POST, PUT } from '@/api/config/base';
import { QuestionPageRequestBody, QusetionsRequestBody, UploadQuestionRequestBody } from '@/types/request/questions';
import { QuestionsPageResponseBody } from '@/types/response/questions';

export const getQusetions = async (qusetionsRequestBody: QusetionsRequestBody) => {
  return await GET('/questions', qusetionsRequestBody)
    .then((res) => res.data)
    .catch((e) => {
      return e;
    });
};

export const postQuestionId = async () => await POST('/questions');

export const uploadQuestion = async ({ questionId, title, content, tagList, point }: UploadQuestionRequestBody) =>
  await PUT(`/questions/${questionId}`, { title, content, tagList, point });

export const getMainContent = async (questionType: string) => {
  return await GET(`/questions/main?type=${questionType}`)
    .then((res) => res.data)
    .catch((e) => {
      return e;
    });
};

export const getQuestionPage = async (
  questionPageRequestBody: QuestionPageRequestBody
): Promise<QuestionsPageResponseBody> => {
  const { data } = await GET('/questions/page', questionPageRequestBody);
  return data;
};

export const getQuestion = async (questionId: number) => {
  return await GET(`/questions/${questionId}`)
    .then((res) => res.data)
    .catch((e) => {
      return e;
    });
};

export const deleteQuestion = async (questionId: number) => await DELETE(`/questions/${questionId}`);
