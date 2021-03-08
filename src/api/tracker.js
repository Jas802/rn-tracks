import axios from 'axios';

export default axios.create({
  baseURL: 'https://2f83d027f848.ngrok.io', //due to using ngrok for free URL must be updated to new address every few hours
});
