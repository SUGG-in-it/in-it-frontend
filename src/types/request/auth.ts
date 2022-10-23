export interface VerifyCodeRequestBody {
  email: string;
  code: string;
}

export interface SendEmailRequestBody {
  email: string;
  type: string;
}
