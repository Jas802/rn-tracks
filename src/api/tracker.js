import axios from 'axios';

export default axios.create({
  baseURL: 'https://4d5118c63484.ngrok.io', //due to using ngrok for free URL must be updated to new address every few hours
});
