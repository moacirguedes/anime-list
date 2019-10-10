import axios from 'axios';

let URL = '';

if (window.location.href.indexOf("localhost") > 0){
  URL = 'http://localhost:3000/';
}
else {
  URL = 'https://moacaserver.herokuapp.com/';
}

const AxiosService = axios.create({
  baseURL: URL
});

export default AxiosService;