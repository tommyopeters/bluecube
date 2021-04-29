import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // appId: "jIFX73QIHKVxFidmtVYXozBGu4da-nIDgjMIzY2OyZE",
    // appId: "0fxfvWss275le2AEZx9j7qoqvdEBYVUQwVVL-xf5FB0",
    appId: "cG6oXmelZBLQEmDtmHleqSswkNXLjpA0AMVIPtuyTm8",
    profiles: [],
    loading: false,
    currentProfile: null,
    query: "a",
    mobileView: false,
    emptyResult: false,
    notifications: [
      {
        image:
          "https://images.unsplash.com/photo-1610646402667-79fce5fc1666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjY3MzZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTYxOTY4MTUzMw&ixlib=rb-1.2.1&q=80&w=400",
        message: "Michael liked you!",
        time: "About 20 minutes ago",
        type: "like",
      },
      {
        image:
          "https://images.unsplash.com/photo-1614440288714-57c4b5b6700a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjY3MzZ8MHwxfGFsbHwxfHx8fHx8Mnx8MTYxOTY4MTUzMw&ixlib=rb-1.2.1&q=80&w=400",
        message: "Jack liked you!",
        time: "About 40 minutes ago",
        type: "like",
      },
      {
        image:
          "https://images.unsplash.com/photo-1591157866194-b3b4e279c698?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjY3MzZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTYxOTY4MTUzMw&ixlib=rb-1.2.1&q=80&w=400",
        message: "Michael commented on your photo!",
        time: "About 56 minutes ago",
        type: "comment",
      },
    ],
  },
  getters: {
    appId: (state) => state.appId,
    profiles: (state) => state.profiles,
    loading: (state) => state.loading,
    query: (state) => state.query,
    mobileView: (state) => state.mobileView,
    emptyResult: (state) => state.emptyResult,
    currentProfile: (state) => state.currentProfile,
    notifications: (state) => state.notifications,
  },
  mutations: {
    setProfiles: (state, profiles) => {
      state.profiles = profiles;
    },
    setLoading: (state, boolean) => {
      state.loading = boolean;
    },
    setCurrentProfile: (state, id) => {
      state.currentProfile = id;
    },
    setQuery: (state, string) => {
      state.query = string;
    },
    setView: (state, boolean) => {
      state.mobileView = boolean;
    },
    setResult: (state, boolean) => {
      state.emptyResult = boolean;
    },
  },
  actions: {
    getProfiles: async ({ commit, getters, dispatch }) => {
      commit("setLoading", true);
      let profiles = await axios
        .get(
          `https://api.unsplash.com/search/users/?page=1&per_page=10&query=${getters.query}&client_id=${getters.appId}`
        )
        .then(async (data) => {
          let results = data.data.results;

          let final = results.map((result) => {
            let profile = {
              id: result.id,
              username: result.username,
              first_name: result.first_name,
              last_name: result.last_name,
              total_photos: result.total_photos,
              photoLink: result.links.photos + `?client_id=${getters.appId}`,
              link: result.links.html,
              instagram: result.instagram_username
                ? "https://instagram.com/" + result.instagram_username
                : null,
            };

            return profile;
          });

          return final;
        })
        .catch(() => false);

      console.log(profiles);

      if (profiles && profiles.length > 1) {
        commit("setProfiles", profiles);
        dispatch("getProfilesPhotos");
      } else {
        commit("setResult", true);
      }
    },
    getProfilesPhotos: async ({ commit, getters }) => {
      // console.log(getters.profiles);
      let profiles = getters.profiles;
      let photos = profiles.map((profile) => {
        return axios.get(profile.photoLink).then((data) => {
          return data.data.map((res) => {
            return {
              id: res.id,
              width: res.width,
              height: res.height,
              urls: res.urls,
              regular_url: res.urls.small,
              download: res.links.download,
              categories: res.categories,
              likes: res.likes,
              location: res.user.location,
            };
          });
        });
      });
      Promise.all(photos).then((res) => {
        res.forEach((photo, index) => {
          photo.length = Math.min(photo.length, 2);
          profiles[index].photos = photo;
        });
        commit("setProfiles", profiles);
        if (getters.profiles[0].photos) {
          commit("setLoading", false);
        }
      });
    },
    setCurrentProfile: ({ commit }, id) => {
      commit("setCurrentProfile", id);
    },
    setView: ({ commit }, boolean) => {
      commit("setView", boolean);
    },
    search: ({ commit, dispatch }, string) => {
      commit("setQuery", string.toLowerCase());
      dispatch("getProfiles");
    },
  },
});

// const capitalize = s => {
//   if (typeof s !== "string") return "";
//   return s.charAt(0).toUpperCase() + s.slice(1);
// };
