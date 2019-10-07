import axios from 'axios';

const HttpService = axios.create({
  baseURL: 'https://api.jikan.moe/v3/'
});

export default HttpService;