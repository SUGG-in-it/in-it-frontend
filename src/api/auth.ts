import { POST } from '@/api/config/base';
import { VerifyCodeRequestBody } from '@/types/request/auth';

//TODO: token check 하는 api 추가하기
export const verifyToken = async () => await POST('', {});

export const sendCode = async (email: string) => await POST('/auth/issue', { email });

export const verifyCode = async (verifyCodeParams: VerifyCodeRequestBody) =>
  await POST('auth/verify', verifyCodeParams);

export const newToken = async (refreshToken: string) => await POST('/token/refresh-token', { refreshToken });
