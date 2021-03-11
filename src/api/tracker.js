import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'https://692f59f8b72a.ngrok.io', //due to using ngrok for free URL must be updated to new address every few hours
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; //takes care of authentication behind the scenes
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
