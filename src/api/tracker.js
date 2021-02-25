import axios from 'axios';

export default axios.create({
  baseURL: 'https://8cd7ea70ec27.ngrok.io', //due to using ngrok for free URL must be updated to new address every few hours
});
