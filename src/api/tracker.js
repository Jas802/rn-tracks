import axios from 'axios';

export default axios.create({
  baseURL: 'https://89fe7d3aee68.ngrok.io', //due to using ngrok for free URL must be updated to new address every few hours
});
