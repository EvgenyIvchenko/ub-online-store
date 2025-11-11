import axios from 'axios';

const $host = axios.create({
  baseURL: 'https://localhost:3000/',
});

const $authHost = axios.create({
  baseURL: 'https://localhost:3000/',
});

const authInterceptor = (config) => {
  config.headers.authrization = `Bearer ${localStorage.getItem('token')}`;

  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
