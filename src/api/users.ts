import { POST, PUT } from '@/api/config/base';
import { JoinRequestBody, LoginRequestBody, ResetPasswrodRequestBody } from '@/types/request/users';

export const login = async (loginParams: LoginRequestBody) => await POST('/users/login', loginParams);

export const join = async (joinParams: JoinRequestBody) => await POST('/users/join', joinParams);

export const resetPassword = async (resetPasswrodParams: ResetPasswrodRequestBody) =>
  await PUT('/users/password', resetPasswrodParams);

export const duplicateCheckEmail = (email: string) => POST('/users/duplicate-email', { email });

export const duplicateCheckNickname = (nickname: string) => POST('/users/duplicate-nickname', { nickname });
