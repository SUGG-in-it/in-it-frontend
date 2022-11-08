import { DELETE, GET, POST, PUT } from '@/api/config/base';
import {
  QuestionPageRequestBody,
  QusetionsRequestBody,
  SearchQusetionsPageRequestParams,
  SearchQusetionsRequestParams,
  UploadQuestionRequestBody,
  UserQusetionsRequestBody,
} from '@/types/request/questions';
import { QuestionId, QuestionsPageResponseBody, SearchQuestionsResponseBody } from '@/types/response/questions';

export const getQusetions = async (qusetionsRequestBody: QusetionsRequestBody) => {
  const { data } = await GET('/questions', qusetionsRequestBody);
  return data;
};

export const getUserQusetions = async (userQusetionsRequestBody: UserQusetionsRequestBody) => {
  const { data } = await GET('/questions/manage', userQusetionsRequestBody);
  return data;
};

export const postQuestionId = async (): Promise<QuestionId> => {
  try {
    const { data } = await POST('/questions');
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const uploadQuestion = async ({ questionId, title, content, tagList, point }: UploadQuestionRequestBody) =>
  await PUT(`/questions/${questionId}`, { title, content, tagList, point });

export const getMainContent = async (questionType: string) => {
  const { data } = await GET(`/questions/main?type=${questionType}`);
  return data;
};

export const getQuestionPage = async ({
  size,
  type = 'total',
}: QuestionPageRequestBody): Promise<QuestionsPageResponseBody> => {
  const { data } = await GET(`/questions/page?size=${size}&type=${type}`);
  return data;
};

export const getUserQuestionPage = async (size: number): Promise<QuestionsPageResponseBody> => {
  const { data } = await GET(`/questions/user-page?size=${size}`);
  return data;
};

export const getQuestion = async (questionId: number) => {
  const { data } = await GET(`/questions/${questionId}`);
  return data;
};

export const deleteQuestion = async (questionId: number) => await DELETE(`/questions/${questionId}`);

export const getSearchQuestionPage = async ({
  size,
  type = 'total',
  tag,
  query = '',
}: SearchQusetionsPageRequestParams): Promise<QuestionsPageResponseBody> => {
  let url = `/questions/search/page?size=${size}&type=${type}`;
  if (tag) url = url.concat(`&tag=${tag}`);
  if (query) url = url.concat(`&query=${query}`);
  const { data } = await GET(url);
  return data;
};

export const getSearchQuestion = async ({
  size,
  type = 'total',
  tag,
  query = '',
  page,
}: SearchQusetionsRequestParams): Promise<SearchQuestionsResponseBody> => {
  let url = `/questions/search?page=${page}&size=${size}&type=${type}`;
  if (tag) url = url.concat(`&tag=${tag}`);
  if (query) url = url.concat(`&query=${query}`);
  const { data } = await GET(url);
  return data;
};
