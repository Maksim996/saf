import vuexStore from "@/store";
import router from "@/router";
import axios from "axios";



// axios.defaults.baseURL = 'http://scientific-activity/' + 'api/';
// axios.defaults.withCredentials = true;
// axios.defaults.headers = {
//     'Content-Type': 'application/json',
//     'Accept': "application/json"
// }

const api = axios.create({
//   // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: 'http://scientific-activity/' + 'api/',
  withCredentials: false,
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': "application/json",
//   }
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 422) {
      vuexStore.commit("setErrors", error.response.data.errors);
    } else if (error.response.status === 401) {
      vuexStore.commit("auth/setUserData", null);
      localStorage.removeItem("authToken");
      router.push({ name: "Login" });
    } else {
      return Promise.reject(error);
    }
  }
);
api.interceptors.request.use(function(config) {
  config.headers.common = {
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  return config;
});
export default api
// export {api as default};
