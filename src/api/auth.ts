import { POST } from '@/api/base';

export interface verifyCodeRequestBody {
  email: string;
  code: string;
}

export const sendCode = async (email: string) => await POST('/auths', { email });

export const verifyCode = async (verifyCodeParams: verifyCodeRequestBody) =>
  await POST('auths/verify', verifyCodeParams);
