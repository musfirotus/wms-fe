import axios from "axios";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';

// const port = 3000;

const token = localStorage.getItem("token");

axios.defaults.headers.common = { Authorization: `bearer ${token}` };

const instance = axios.create({
  baseURL: `https://simple-wms.herokuapp.com/api/v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});

// menghandle request
instance.interceptors.request.use(
    (config) => {
      NProgress.start();
      return config;
    },
    (error) => Promise.reject(error)
);

// menghandle response
instance.interceptors.response.use(
    function(response) {
      NProgress.done();
      return response;
    },
    function(error) {
      return Promise.reject(error);
    }
);
  
export default instance;