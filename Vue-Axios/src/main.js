import Vue from 'vue'
import axios from 'axios';
import App from './App.vue'

import router from './router'
import store from './store'

axios.defaults.baseURL = "https://vuejs-axios-authenticati-86fb7.firebaseio.com";
axios.defaults.headers.common['Authorization'] = "asddgfh";
axios.defaults.headers.get['Accepts'] = "application/json";

const reqInterceptors = axios.interceptors.request.use(config => {
  console.log('Req Interceptor', config);
  return config;
});

const resInterceptors = axios.interceptors.response.use(res => {
  console.log('Res Interceptor', res);
  return res;
})

axios.interceptors.request.eject(reqInterceptors);
axios.interceptors.response.eject(resInterceptors);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
