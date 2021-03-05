import axios from 'axios';

export default axios.create({
  baseURL: 'https://0dc46389d35f.ngrok.io', //due to using ngrok for free URL must be updated to new address every few hours
});
