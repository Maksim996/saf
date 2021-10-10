import api from '@/api/index';
import axios from "axios";
import {API} from "@/api/constants-api";

axios.interceptors.request.use(function(config) {
  config.headers.common = {
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  return config;
});


export default {
  namespaced: true,

  state: {
    userData: null
  },

  getters: {
    user: state => state.userData
  },

  mutations: {
    setUserData(state, user) {
      state.userData = user;
    }
  },

  actions: {
    getUserData({ commit }) {
      api
        .get(API.USER)
        .then(response => {
          commit("setUserData", response);
        })
        .catch(() => {
          localStorage.removeItem("authToken");
        });
    },
    sendLoginRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      console.log(data)
      // return api.post(API.LOGIN, data)
      return api.post(API.LOGIN, data)
      // return axios.post('http://scientific-activity/' + 'api'+ API.LOGIN, data)
      // // return axios.post(API.LOGIN, data)
        .then(response => {
          console.log('response',response)
          commit("setUserData", response.data.user);
          localStorage.setItem("authToken", response.data.token);
        })
        // .then(response =>
        // {
        //   console.log('res' , response)
        // })
        .catch(error => {
          console.log('yess 1', error)
          console.log('yess', error.response)
        });
    },
    // sendRegisterRequest({ commit }, data) {
    //   commit("setErrors", {}, { root: true });
    //   return api
    //     .post(API.REGISTER, data)
    //     .then(response => {
    //       commit("setUserData", response.data.user);
    //       localStorage.setItem("authToken", response.data.token);
    //     });
    // },
    sendLogoutRequest({ commit }) {
      api.get(API.LOGOUT).then((res) => {
        console.log(res)
        commit("setUserData", null);
        localStorage.removeItem("authToken");
      });
    },
    // sendVerifyResendRequest() {
    //   return axios.get(process.env.VUE_APP_API_URL + "email/resend");
    // },
    // sendVerifyRequest({ dispatch }, hash) {
    //   return axios
    //     .get(process.env.VUE_APP_API_URL + "email/verify/" + hash)
    //     .then(() => {
    //       dispatch("getUserData");
    //     });
    // }
  }
};
