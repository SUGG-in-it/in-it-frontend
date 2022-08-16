import { GET, POST, PUT } from '@/api/base';

export interface loginRequestBody {
  email: string;
  password: string;
}

export interface joinRequestBody {
  email: string;
  password: string;
  nickname: string;
  year: string;
  workPosition: string;
}

export interface resetPasswrodRequestBody {
  email: string;
  password: string;
}

export const login = async (loginParams: loginRequestBody) => await POST('/user/login', loginParams);

export const join = async (joinParams: joinRequestBody) => await POST('/user/join', joinParams);

export const resetPassword = async (resetPasswrodParams: resetPasswrodRequestBody) =>
  await PUT('/user/password', resetPasswrodParams);

export const duplicateEmail = (email: string) => GET('/user/duplicate-email', { email });
