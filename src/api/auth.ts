import { POST } from '@/api/config/base';
import { SendEmailRequestBody, VerifyCodeRequestBody } from '@/types/request/auth';

export const sendCode = async (sendEmailRequestBody: SendEmailRequestBody) =>
  await POST('/auth/issue', sendEmailRequestBody);

export const verifyCode = async (verifyCodeParams: VerifyCodeRequestBody) =>
  await POST('auth/verify', verifyCodeParams);

export const newToken = async (refreshToken: string) => await POST('/token/refresh-token', { refreshToken });
