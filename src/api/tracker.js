import axios from 'axios';

export default axios.create({
  baseURL: 'https://450df9bfd8f0.ngrok.io', //due to using ngrok for free URL must be updated to new address every few hours
});
