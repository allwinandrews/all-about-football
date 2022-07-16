import axios from "axios";

const CancelToken = axios.CancelToken;
let cancel;

const portEnd = ":8000/api/v1/";

const instance = axios.create({
  baseURL: "http://174.138.60.70" + portEnd,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setBaseUrl = (url) => {
  // if (!url.includes("localhost:"))
  //   instance.defaults.baseURL = "http://" + url + portEnd;

  // if (!url.includes("localhost:"))
  instance.defaults.baseURL = "http://registration.shorescoa.com" + portEnd;
  // "http://registration.alpharesorttechnologies.com" + portEnd;
  // "http://registration.laketownwharfcoa.com" + portEnd;
};

export const setAuthToken = (token) => {
  if (token) {
    //applying token
    instance.defaults.headers.common["Authorization"] = token;
  } else {
    //deleting the token from header
    delete instance.defaults.headers.common["Authorization"];
  }
};

export const setContentType = (content_type) => {
  if (content_type) {
    //applying content_type
    instance.defaults.headers.post["Content-Type"] = content_type;
  }
};

// instance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (err) => {
//     return Promise.reject(err);
//   }
// );

instance.interceptors.request.use(
  (config) => {
    if (cancel) {
      cancel(); // cancel request
    }

    config.cancelToken = new CancelToken(function executor(c) {
      cancel = c;
    });

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
