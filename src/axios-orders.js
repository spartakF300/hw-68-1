import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://burger-430ee.firebaseio.com/'
});

// const instance = axios.create({
//   baseURL: 'https://burger-430ee.firebaseio.com/'
// });
//
// instance.interceptors.request.use(req=>{
//   console.log('[In request interceptor]', req);
//   return req;
// });
// export  default instance;

export default axiosOrders;