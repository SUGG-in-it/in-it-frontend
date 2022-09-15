import { newToken } from '@/api/auth';
import { CustomError } from '@/api/config/error';
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
  code?: string;
}

axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    const contentType = config.url === '/image/upload/1' ? 'multipart/form-data' : 'application/json';

    const contentTypeHeader = {
      'Content-Type': contentType,
    };

    return {
      ...config,
      headers: {
        ...config.headers,
        ...contentTypeHeader,
      },
    };
  },
  (error) => Promise.reject(error)
);

/* axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response } = error;
    // 401 error => refreshToken으로 accessToken 갱신 => 재요청

    if (response?.status === 401 && response.data.code !== 'UNAUTHORIZED_PASSWORD') {
      const originalRequest = config;
      const refreshToken = localStorage.getItem('refreshToken');
      const data = await newToken(refreshToken);
      const accessToken = data.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      return axios(originalRequest);
    } else {
      console.log('???', response.data.status, response.data.message, response.data.code);
      throw new CustomError(response.data?.status, response.data?.message, response.data?.code);
    }
  }
); */

const request = async ({ url, method, body, params }: RequestType): Promise<ResponseType> => {
  try {
    const config: AxiosRequestConfig = {
      baseURL: process.env.NEXT_PUBLIC_API_PREFIX,
      params,
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
    console.log('API error', error);
    throw new CustomError(error.response.data?.status, error.response.data?.message, error.response.data?.code);
  }
};

export const GET = (url: string, params?: object) => request({ url, method: 'get', params });
export const POST = (url: string, body?: object) => request({ url, method: 'post', body });
export const PATCH = (url: string, body?: object) => request({ url, method: 'patch', body });
export const PUT = (url: string, body?: object) => request({ url, method: 'put', body });
export const DELETE = (url: string) => request({ url, method: 'delete' });
