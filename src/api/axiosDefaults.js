import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-byfreddish-6e65377a7daf.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;