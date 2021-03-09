import axios from 'axios';

export default axios.create({
  baseURL: 'https://f3ad066af7ff.ngrok.io', //due to using ngrok for free URL must be updated to new address every few hours
});
