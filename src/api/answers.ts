import { POST, PUT } from '@/api/config/base';
import { UploadAnswerRequestBody } from '@/types/request/answers';

export const postAnswerId = async () => await POST('/answers');

export const uploadAnswer = async ({ answerId, content }: UploadAnswerRequestBody) =>
  await PUT(`/answers/${answerId}`, { content });
