/* eslint-disable */
import apolloAxios from './axios.config';

export const getAllProducts = async (): Promise<any> => {
  const res = await apolloAxios.get('/products');
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(res.data);
    }, 3000);
  });
};

export const getProductHighlights = async (): Promise<any> => {
  const res = await apolloAxios.get('/products/highlight');
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(res.data);
    }, 3000);
  });
};
