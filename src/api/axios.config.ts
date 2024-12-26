import axios, { AxiosError, AxiosResponse } from 'axios';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const handleError = (error: any) => {
  if (axios.isCancel(error)) {
    return Promise.reject(error);
  }
  const isAxiosError = axios.isAxiosError(error);
  if (isAxiosError) {
    const axiosError = error as AxiosError;
    if (axiosError.code === 'ERR_NETWORK') {
      return Promise.reject('Network Error. Please refresh the page!');
    }
  }
  const response: AxiosResponse = isAxiosError ? error.response : error;
  if (response) {
    if (response.status === 401) {
      //
    }
    return Promise.reject(response.data);
  }
  return Promise.reject('Unknow error!');
};

const apolloAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API || '',
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apolloAxios.interceptors.request.use((config) => {
  return config;
});

apolloAxios.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
    return handleError(response);
  },
  (error) => {
    return handleError(error);
  }
);

export default apolloAxios;
