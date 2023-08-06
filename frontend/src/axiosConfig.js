import axios from 'axios';

axios.defaults.baseURL = process.env.FRONTEND_BASE_URL;
  // process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : '/';
