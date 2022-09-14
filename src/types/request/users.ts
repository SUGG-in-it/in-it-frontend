export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface JoinRequestBody {
  email: string;
  password: string;
  nickname: string;
  year: string;
  workPosition: string;
}

export interface ResetPasswrodRequestBody {
  email: string;
  password: string;
}
