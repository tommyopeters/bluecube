import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";
import { router } from "../main";
import jwt_decode from "jwt-decode";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userLoggedIn: false,
    token: "",
    email_address: null,
    user_id: null,
    selectedProduct: null,
    apiInfoList: [
      {
        name: "Username",
        type: "text",
        value: "developer@miyazki.coom.ng"
      },
      {
        name: "Password",
        type: "password",
        value: "P@ssword1"
      },
      {
        name: "Encryption Password",
        type: "text",
        value: "fhG7sP7ppRkie73r8y5rMosdnEHsqg2v"
      },
      {
        name: "Encryption Sale",
        type: "text",
        value: "fhG7sP7ppRkie73r8y5rMosdnEHsqg2v"
      },
      {
        name: "Encryption IV",
        type: "text",
        value: "fhG7sP7ppRkie73r8y5rMosdnEHsqg2v"
      }
    ],
    productList: [
      {
        product_name: "Wealth.ng 1",
        product_code: "WealthNG1",
        product_icon: "https://wewewe",
        features: [
          { name: "Wallet", checked: false },
          { name: "Accounts", checked: false },
          { name: "Investments", checked: false },
          { name: "Payments", checked: false }
        ]
      },
      {
        product_name: "Wealth Black 1",
        product_code: "WealthBlack1",
        product_icon: "https://google.com",
        features: [
          { name: "Wallet", checked: false },
          { name: "Accounts", checked: false },
          { name: "Investments", checked: false },
          { name: "Payments", checked: false }
        ]
      },
      {
        product_name: "Wealth.ng 2",
        product_code: "WealthNG2",
        product_icon: "https://wewewe",
        features: [
          { name: "Wallet", checked: false },
          { name: "Accounts", checked: false },
          { name: "Investments", checked: false },
          { name: "Payments", checked: false }
        ]
      },
      {
        product_name: "Wealth Black 2",
        product_code: "WealthBlack2",
        product_icon: "https://google.com",
        features: [
          { name: "Wallet", checked: false },
          { name: "Accounts", checked: false },
          { name: "Investments", checked: false },
          { name: "Payments", checked: false }
        ]
      },
      {
        product_name: "Wealth.ng 3",
        product_code: "WealthNG3",
        product_icon: "https://wewewe",
        features: [
          { name: "Wallet", checked: false },
          { name: "Accounts", checked: false },
          { name: "Investments", checked: false },
          { name: "Payments", checked: false }
        ]
      },
      {
        product_name: "Wealth Black 3",
        product_code: "WealthBlack3",
        product_icon: "https://google.com",
        features: [
          { name: "Wallet", checked: false },
          { name: "Accounts", checked: false },
          { name: "Investments", checked: false },
          { name: "Payments", checked: false }
        ]
      }
    ],
    callHistory: [
      {
        request_date: "06/04/2020 12:09:10",
        product: "wealthng",
        request_ip: "10.0.71.300",
        actor: "investor",
        action: "liquidation",
        payload_content: "InvestmentLiquidation"
      },
      {
        request_date: "15/02/2020 16:09:10",
        product: "wealthng",
        request_ip: "10.0.40.2",
        actor: "admin",
        action: "subscription",
        payload_content: "InvestmentSubscription"
      },
      {
        request_date: "25/04/2020 20:09:10",
        product: "wealthng",
        request_ip: "10.0.78.310",
        actor: "investor",
        action: "view",
        payload_content: "ProductList"
      },
      {
        request_date: "03/04/2020 12:09:10",
        product: "wealthng",
        request_ip: "10.0.71.300",
        actor: "investor",
        action: "liquidation",
        payload_content: "InvestmentLiquidation"
      },
      {
        request_date: "14/04/2020 16:09:10",
        product: "wealthng",
        request_ip: "10.0.40.2",
        actor: "admin",
        action: "subscription",
        payload_content: "InvestmentSubscription"
      },
      {
        request_date: "06/02/2020 20:09:10",
        product: "wealthng",
        request_ip: "10.0.78.310",
        actor: "investor",
        action: "view",
        payload_content: "ProductList"
      },
      {
        request_date: "05/03/2020 12:09:10",
        product: "wealthng",
        request_ip: "10.0.71.300",
        actor: "admin",
        action: "view",
        payload_content: "InvestmentLiquidation"
      },
      {
        request_date: "05/03/2020 12:09:10",
        product: "wealthng",
        request_ip: "10.0.71.300",
        actor: "admin",
        action: "subscription",
        payload_content: "InvestmentLiquidation"
      },
      {
        request_date: "04/04/2020 16:09:10",
        product: "wealthng",
        request_ip: "10.0.40.2",
        actor: "admin",
        action: "subscription",
        payload_content: "InvestmentSubscription"
      },
      {
        request_date: "03/03/2020 20:09:10",
        product: "wealthng",
        request_ip: "10.0.78.310",
        actor: "admin",
        action: "subscription",
        payload_content: "ProductList"
      },
      {
        request_date: "03/03/2020 20:09:10",
        product: "wealthng",
        request_ip: "10.0.78.310",
        actor: "admin",
        action: "liquidation",
        payload_content: "ProductList"
      }
    ],
    accountInfo: {
      account_type: "business",
      name: "Sankore Limited",
      contact_address: "Plot 242 Kofoabayomi Street Victoria Island Lagos",
      contact_phone: "3423232323323",
      contact_email: "somebody@email.com",
      account_status: "verified"
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  },
  getters: {
    userLoggedIn: state => state.userLoggedIn,
    user: state => {
      return {
        id: state.user_id,
        email: state.email_address,
        first_name: capitalize(state.accountInfo.first_name),
        last_name: capitalize(state.accountInfo.last_name)
      };
    },
    token: state => state.token,
    selectedProduct: state => state.selectedProduct,
    apiInfoList: state => state.apiInfoList,
    productList: state => state.productList,
    callHistory: state => {
      let callHistory = state.callHistory;
      callHistory.forEach(history => {
        history.request_date = new Date(
          history.request_date
            .split(" ")[0]
            .split("/")
            .reverse()
            .join("-") +
            "T" +
            history.request_date.split(" ")[1]
        );
      });

      callHistory = callHistory.sort((a, b) => {
        return a.request_date - b.request_date;
      });
      return callHistory;
    },
    accountInfo: state => state.accountInfo,
    currentProductFeature: state => (productCode, feature_name) => {
      return state.productList.filter(product => product.product_code == productCode)[0].filter(feature => feature.name == feature_name)[0].checked;
    }
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  mutations: {
    //
    selectProductCheckbox: (state, details) => {
      console.log(details);
      // let newState = { ...state };
      // let currentFeature = newState.productList
      //   .filter((product) => product.product_code == details.code)[0]
      //   .features.filter((feature) => feature.name == details.feature_name)[0];

      // console.log(currentFeature);
      // newState.productList
      //   .filter((product) => product.product_code == details.code)[0]
      //   .features.filter(
      //     (feature) => feature.name == details.feature_name
      //   )[0] = !currentFeature.checked;
    },
    selectProductCheckboxAll: (state, code) => {
      let newState = { ...state };
      newState.productList
        .filter(product => {
          return product.product_code == code;
        })[0]
        .features.forEach(feature => {
          feature.checked = true;
        });

      state = newState;
    },
    selectProductCheckboxNone(state, code) {
      let newState = { ...state };
      newState.productList
        .filter(product => {
          return product.product_code == code;
        })[0]
        .features.forEach(feature => {
          feature.checked = false;
        });

      state = newState;
    },
    setSelectedProduct(state, code) {
      state.selectedProduct = code;
    },
    saveToken: (state, token) => {
      state.token = token;
      localStorage.setItem("accessToken", token);
    },
    authUser: (state, account) => {
      state.userLoggedIn = true;
      state.email_address = account.email_address;
      state.user_id = account.user_id;
      state.accountInfo = account.accountInfo;
    },
    logout(state) {
      state.userLoggedIn = false;
    },
    clearAuth(state) {
      state.email_address = null;
      state.first_name = null;
      state.last_name = null;
      state.user_id = null;
      console.log(state);
    },
    updateAccount(state, account) {
      state.accountInfo = account;
    }
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  actions: {
    setLogoutTimeout: ({ dispatch, getters, commit }, duration) => {
      setTimeout(async () => {
        if (document.cookie.indexOf("refreshToken") !== -1 && getters.token !== "") {
          console.log("refreshing token");
          let myCookies = {};
          var kv = document.cookie.split(";");
          for (var id in kv) {
            var cookie = kv[id].split("=");
            myCookies[cookie[0].trim()] = cookie[1];
          }
          // let userResponse = await fetch("http://localhost:8080/api/auth/refresh-token/request?token=" + myCookies.refreshToken + "&jwToken=" + getters.token)
          let userResponse = await axios.get("http://localhost:8080/api/auth/refresh-token/request?token=" + myCookies.refreshToken + "&jwToken=" + getters.token).catch(error => {
            console.log("There's an error here");
            console.log(error);
            dispatch("logout");
            return false;
          });
          if (userResponse) {
            console.log(userResponse);
            let response = userResponse.data;
            commit("saveToken", response.accessToken);
            let data = jwt_decode(response.accessToken);
            let timeout = (data.exp - data.iat) * 1000;

            dispatch("setLogoutTimeout", timeout);
          }
        } else {
          dispatch("logout");
        }
      }, duration - 5000);
    },
    selectProductCheckbox: ({ commit }, details) => {
      commit("selectProductCheckboxAll", details);
    },
    selectProductCheckboxAll: ({ commit }, code) => {
      commit("selectProductCheckboxAll", code);
    },
    selectProductCheckboxNone: ({ commit }, code) => {
      commit("selectProductCheckboxNone", code);
    },
    setSelectedProduct: ({ commit }, code) => {
      commit("setSelectedProduct", code);
    },
    updateAccount: async ({ commit, getters }, account) => {
      console.log(account);
      if (account.account_type == "business") {
        await axios
          .put(
            "http://localhost:8080/api/user/business-user/me",
            {
              firstName: account.first_name,
              lastName: account.last_name,
              businessName: account.business_name,
              officeAddress: account.contact_address,
              phoneNumber: account.contact_phone
            },
            {
              headers: {
                Authorization: "Bearer " + getters.token
              }
            }
          )
          .catch(error => {
            console.log(error);
          });
      } else {
        await axios
          .put(
            "http://localhost:8080/api/user/individual-user/me",
            {
              firstName: account.first_name,
              lastName: account.last_name,
              address: "Olasoji close",
              phoneNumber: account.contact_phone
            },
            {
              headers: {
                Authorization: "Bearer " + getters.token
              }
            }
          )
          .catch(error => {
            console.log(error);
          });
      }
      commit("updateAccount", account);
    },
    deleteAccount: async ({ getters, dispatch }) => {
      console.log(getters.token);
      await fetch("http://localhost:8080/api/user/me", {
        headers: {
          Authorization: "Bearer " + getters.token
        },
        method: "DELETE"
      }).then(async response => {
        if (response.status >= 400 && response.status < 600) {
          let res = await response.json();
          throw new Error(res.message);
        }
        return response;
      });
      dispatch("logout");
    },
    // register: ({ commit }, account) => {
    //   let request;
    //   console.log(account);
    //   if (account.type == "business") {
    //     request = JSON.stringify({
    //       businessName: account.business_name,
    //       firstName: account.first_name,
    //       lastName: account.last_name,
    //       email: account.email,
    //       password: account.password,
    //       officeAddress: "Default Address to be removed",
    //       phoneNumber: "08172127320"
    //     });
    //   }

    //   // let du(ration =) * 10 3600;
    // let duration = 3600 * 1000;
    //   // let expirationDate = new Date(new Date().getTime() + duration);
    //   console.log(request);

    // return fetch("http://3.142.189.226:8181/api/registration/business-user", {
    //   return fetch("http://localhost:8080/api/registration/business-user", {
    //     method: "post",
    //     headers: { "Content-Type": "application/json" },
    //     body: request
    //   })
    //     .then(res => {
    //       return res.json();
    //       // if (res.data.response_code == 201) {
    //       //   return res.data.response_message;
    //       // } else if (res.data.response_code == 200) {
    //       //   console.log("we got here");
    //       //   commit("authUser", {
    //       //     email_address: res.data.response_content.email_address,
    //       //     first_name: res.data.response_content.first_name,
    //       //     last_name: res.data.response_content.last_name,
    //       //     user_id: res.data.response_content.user_id,

    //       //   });
    //       //   if (account.rememberMe) {
    //       //     let myCookies = {
    //       //       email_address: res.data.response_content.email_address,
    //       //       first_name: res.data.response_content.first_name,
    //       //       last_name: res.data.response_content.last_name,
    //       //       user_id: res.data.response_content.user_id,

    //       //     };
    //       //     document.cookie = "";
    //       //     var expiresAttrib = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toString();
    //       //     var cookieString = "";
    //       //     for (var key in myCookies) {
    //       //       cookieString = key + "=" + myCookies[key] + ";" + expiresAttrib + ";";
    //       //       document.cookie = cookieString;
    //       //     }
    //       //     console.log(document.cookie);
    //       //   }
    //       //   console.log("user created");
    //       //   localStorage.setItem("email_address", res.data.response_content.email_address);
    //       //   localStorage.setItem("first_name", res.data.response_content.first_name);
    //       //   localStorage.setItem("last_name", res.data.response_content.last_name);
    //       //   localStorage.setItem("user_id", res.data.response_content.user_id);

    //       //   localStorage.setItem("expirationDate", expirationDate);
    //       //   dispatch("setLogoutTimeout", duration);
    //       //   router.push("/api-key");
    //       //   return false;
    //       // }
    //     })
    //     .then(data => console.log(data))
    //     .catch(err => {
    //       // Remove
    //       commit("login");
    //       return err;
    //     });
    // },
    login: async ({ commit, dispatch }, account) => {
      let request = JSON.stringify({
        username: account.email,
        password: account.password,
        rememberMe: account.rememberMe

        // return_browser_login_endpoint: false
      });
      console.log(request);

      // let res = await fetch("http://3.142.189.226:8181/auth/login", {
      // let res = await fetch("http://222deab19caf.ngrok.io/auth/login", {
      let res = await fetch("http://localhost:8080/auth/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: request
      })
        .then(async response => {
          if (response.status >= 400 && response.status < 600) {
            let res = await response.json();
            throw new Error(res.message);
          }
          return response;
        })
        .catch(error => {
          console.log(error);
          return "error";
        });
      if (res !== "error") {
        let response = await res.json();
        console.log(response);
        commit("saveToken", response.accessToken);
        let data = jwt_decode(response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
        console.log(data);
        // .then(res => {
        //   console.log(res.);
        // let newres = {
        //   data: {
        //     response_code: 200,
        //     response_content: {
        //       email_address: "tommyopeters@gmail.com",
        //       first_name: "Tommy",
        //       last_name: "O' Peters",
        //       user_id: "235",

        //     }
        //   }
        // };

        let timeout = (data.exp - data.iat) * 1000;
        console.log(timeout);

        // let userResponse = await fetch("http://3.142.189.226:8181/api/user/me", {
        let userResponse = await fetch("http://localhost:8080/api/user/me", {
          // let userResponse = await fetch("http://222deab19caf.ngrok.io/api/user/me", {
          headers: {
            Authorization: "Bearer " + response.accessToken
          }
        });

        let user = await userResponse.json();

        if (user.user.type == "business") {
          commit("authUser", {
            account_type: user.user.type,
            account_status: user.user.enabled,

            email_address: user.user.email,
            user_id: user.user.userId,

            accountInfo: {
              email_address: user.user.email,
              first_name: user.user.firstName,
              last_name: user.user.lastName,
              business_name: user.user.businessName,
              contact_address: user.user.officeAddress,
              contact_phone: user.user.phoneNumber,
              contact_email: "somebody@email.com",
              account_type: user.user.type,

              account_status: user.user.enabled
            }
          });
        } else {
          commit("authUser", {
            account_type: user.user.type,
            account_status: user.user.enabled,

            email_address: user.user.email,
            user_id: user.user.userId,

            accountInfo: {
              account_type: user.user.type,
              account_status: user.user.enabled,

              email_address: user.user.email,
              first_name: user.user.firstName,
              last_name: user.user.lastName,
              contact_phone: user.user.phoneNumber
            }
          });
        }
        let myCookies = {
          refreshToken: response.refreshToken
        };

        document.cookie = "";
        var expiresAttrib = new Date(Date.now() + 100 * 60 * 60 * 24).toGMTString();
        var cookieString = "";
        for (var key in myCookies) {
          cookieString = key + "=" + myCookies[key] + "; expires=" + expiresAttrib + ";path = /;";
          document.cookie = cookieString;
        }

        console.log(document.cookie);

        dispatch("setLogoutTimeout", timeout);

        router.push("/api-key");
        return false;
      }
    },
    logout: ({ commit }) => {
      commit("clearAuth");
      commit("logout");
      deleteAllCookies();
      localStorage.clear();
      router.push("/login");
    },
    async autoLogin({ commit, dispatch }) {
      console.log("attempting autologin");
      if (document.cookie.indexOf("refreshToken") !== -1 && localStorage.getItem("accessToken")) {
        let myCookies = {};
        var kv = document.cookie.split(";");
        for (var id in kv) {
          var cookie = kv[id].split("=");
          myCookies[cookie[0].trim()] = cookie[1];
        }
        console.log(myCookies.refreshToken);

        let userResponse = await fetch("http://localhost:8080/api/auth/refresh-token/request?token=" + myCookies.refreshToken + "&jwToken=" + localStorage.getItem("accessToken"))
          .then(async response => {
            if (response.status >= 400 && response.status < 600) {
              let res = await response.json();
              throw new Error(res.message);
            }
            return response;
          })
          .catch(error => {
            console.log(error);
            dispatch("logout");
            return false;
          });
        if (userResponse) {
          let response = await userResponse.json();
          commit("saveToken", response.accessToken);
          let data = jwt_decode(response.accessToken);
          let timeout = (data.exp - data.iat) * 1000;

          dispatch("setLogoutTimeout", timeout);

          let userInfo = await fetch("http://localhost:8080/api/user/me", {
            // let userInfo = await fetch("http://222deab19caf.ngrok.io/api/user/me", {
            headers: {
              Authorization: "Bearer " + response.accessToken
            }
          });

          let user = await userInfo.json();

          if (user.user.type == "business") {
            commit("authUser", {
              account_type: user.user.type,
              account_status: user.user.enabled,

              email_address: user.user.email,
              user_id: user.user.userId,

              accountInfo: {
                email_address: user.user.email,
                first_name: user.user.firstName,
                last_name: user.user.lastName,
                business_name: user.user.businessName,
                contact_address: user.user.officeAddress,
                contact_phone: user.user.phoneNumber,
                contact_email: "somebody@email.com",
                account_type: user.user.type,

                account_status: user.user.enabled
              }
            });
          } else {
            commit("authUser", {
              account_type: user.user.type,
              account_status: user.user.enabled,

              email_address: user.user.email,
              user_id: user.user.userId,

              accountInfo: {
                account_type: user.user.type,
                account_status: user.user.enabled,

                email_address: user.user.email,
                first_name: user.user.firstName,
                last_name: user.user.lastName,
                contact_phone: user.user.phoneNumber
              }
            });
          }
        }
        return true;
      } else {
        // const userId = localStorage.getItem("user_id");
        // if (!localStorage.getItem("user_id")) {
        //   return false;
        // }
        // const expirationDate = localStorage.getItem("expirationDate");
        // if (new Date() >= expirationDate) {
        //   return false;
        // }
        // commit("authUser", {
        //   email_address: localStorage.getItem("email_address"),
        //   first_name: localStorage.getItem("first_name"),
        //   last_name: localStorage.getItem("last_name"),
        //   user_id: localStorage.getItem("user_id")
        // });
        return false;
      }
    }
  }
});

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const deleteAllCookies = () => {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};
