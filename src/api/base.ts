import { newToken } from '@/api/auth';
import { CustomError } from '@/api/error';
import axios, { AxiosRequestConfig } from 'axios';
interface RequestType {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  body?: object;
  params?: object;
}
interface ResponseType {
  data?: any;
  message?: string;
  status: string;
}

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response } = error;
    // 401 error => refreshToken으로 accessToken 갱신 => 재요청
    if (response?.status === 401) {
      const originalRequest = config;
      const refreshToken = localStorage.getItem('refreshToken');
      const data = await newToken(refreshToken);
      const accessToken = data.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

const request = async ({ url, method, body, params }: RequestType): Promise<ResponseType> => {
  try {
    const config: AxiosRequestConfig = {
      baseURL: process.env.NEXT_PUBLIC_API_PREFIX,
      params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const { data } =
      (method === 'get' && (await axios.get(url, config))) ||
      (method === 'post' && (await axios.post(url, body, config))) ||
      (method === 'patch' && (await axios.patch(url, body, config))) ||
      (method === 'put' && (await axios.put(url, body, config))) ||
      (method === 'delete' && (await axios.delete(url, config))) ||
      {};
    return data;
  } catch (error: any) {
    // console.log('API ERROR', error, error.response.status);
    throw new CustomError(error.response.status, error.response.message);
  }
};

export const GET = (url: string, params?: object) => request({ url, method: 'get', params });
export const POST = (url: string, body?: object) => request({ url, method: 'post', body });
export const PATCH = (url: string, body?: object) => request({ url, method: 'patch', body });
export const PUT = (url: string, body?: object) => request({ url, method: 'put', body });
export const DELETE = (url: string) => request({ url, method: 'delete' });
