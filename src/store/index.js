import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    appId: "jIFX73QIHKVxFidmtVYXozBGu4da-nIDgjMIzY2OyZE",
    profiles: [],
    loading: false,
  },
  getters: {
    appId: (state) => state.appId,
    profiles: (state) => state.profiles,
    loading: (state) => state.loading,
  },
  mutations: {
    setProfiles: (state, profiles) => {
      state.profiles = profiles;
    },
    setLoading: (state, boolean) => {
      state.loading = boolean;
    },
  },
  actions: {
    getProfiles: async ({ commit, getters, dispatch }) => {
      commit("setLoading", true);
      let profiles = await axios
        .get(
          `https://api.unsplash.com/search/users/?page=1&per_page=20&query=a&client_id=${getters.appId}`
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
        });

      commit("setProfiles", profiles);
      dispatch("getProfilesPhotos");
    },
    getProfilesPhotos: async ({ commit, getters }) => {
      // console.log(getters.profiles);
      let profiles = getters.profiles;
      let photos = profiles.map((profile) => {
        return axios.get(profile.photoLink).then((data) => {
          return data.data.map((res) => {
            return {
              id: res.id,
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
          photo.length = Math.min(photo.length, 4);
          profiles[index].photos = photo;
        });
        commit("setProfiles", profiles);
        if (getters.profiles[0].photos) {
          commit("setLoading", false);
        }
      });
    },
  },
});

// const capitalize = s => {
//   if (typeof s !== "string") return "";
//   return s.charAt(0).toUpperCase() + s.slice(1);
// };
