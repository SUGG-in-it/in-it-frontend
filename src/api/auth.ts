import { POST } from '@/api/base';

export interface verifyCodeRequestBody {
  email: string;
  code: string;
}

//TODO: token check 하는 api 추가하기
export const verifyToken = async () => await POST('', {});

export const sendCode = async (email: string) => await POST('/auths', { email });

export const verifyCode = async (verifyCodeParams: verifyCodeRequestBody) =>
  await POST('auths/verify', verifyCodeParams);
