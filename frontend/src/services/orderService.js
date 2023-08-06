import axios from 'axios';

export const createOrder = async order => {
  try {
    const { data } = axios.post('/orders/create', order);
    return data;
  } catch (error) {}
};
