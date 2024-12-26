/* eslint-disable */
import apolloAxios from './axios.config';

export const getAllProducts = async (): Promise<any> => {
  const res = await apolloAxios.get('/products');
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(res.data);
    }, 1000);
  });
};

export const getProductHighlights = async (): Promise<any> => {
  const res = await apolloAxios.get('/products/highlight');
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(res.data);
    }, 1000);
  });
};

export const getProductDetail = async (id: string): Promise<any> => {
  const res = await apolloAxios.get(`/products/${id}`);
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(res.data);
    }, 1000);
  });
};

export const getProductSuggestion = async (): Promise<any> => {
  const res = await apolloAxios.get('/products/suggest');
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(res.data);
    }, 1000);
  });
};
