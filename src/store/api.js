import axios from "axios";

// const port = 3000;

const instance = axios.create({
  baseURL: `https://simple-wms.herokuapp.com/api/v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});

// menghandle request
instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error)
);

// menghandle response
instance.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      return Promise.reject(error);
    }
);
  
export default instance;