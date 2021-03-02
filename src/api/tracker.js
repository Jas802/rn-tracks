import axios from 'axios';

export default axios.create({
  baseURL: 'https://bd76513510f5.ngrok.io', //due to using ngrok for free URL must be updated to new address every few hours
});
