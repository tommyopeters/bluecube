<template>
  <div
    class="profile"
    :class="{ active: currentProfile == profile.id }"
    ref="profileEl"
    @click="handleClick"
  >
    <div class="image-control">
      <img
        v-for="(srcs, index) in profile.photos"
        :key="index"
        :src="srcs.regular_url"
        v-show="index == currentPhoto"
      />
      <!-- <img :src="this.profile.photos[0].regular_url" alt="" />
      <img :src="this.profile.photos[1].regular_url" alt="" />
      <img :src="this.profile.photos[2].regular_url" alt="" />
      <img :src="this.profile.photos[3].regular_url" alt="" /> -->
    </div>
    <div class="profile-container">
      <div class="photo-bars">
        <div
          class="photo-bar"
          v-for="(photo, index) in profile.photos"
          :key="index"
          :class="{ active: index == currentPhoto }"
        ></div>
      </div>
      <div class="bottom-row" :class="{ active: currentProfile == profile.id }">
        <div class="profile-detais">
          <div>{{ profile.first_name }}, {{ profile.total_photos }}</div>
          <div class="location">
            <i class="fas fa-map-marker-alt"></i>
            <span>{{
              profile.photos[0].location
                ? profile.photos[0].location
                : "Somewhere Cool"
            }}</span>
          </div>
        </div>
        <div class="urls">
          <a
            class="instagram"
            :class="{ disabled: !profile.instagram }"
            :href="profile.instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a :href="profile.link" class="unsplash-link">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProfileCard",
  data() {
    return {
      currentPhoto: 0,
    };
  },
  props: ["profile"],
  computed: {
    ...mapGetters(["currentProfile"]),
  },
  methods: {
    ...mapActions(["setCurrentProfile"]),
    handleClick: function(e) {
      if ($(e.target).hasClass("photo-bar")) {
        this.currentPhoto = (this.currentPhoto + 1) % 4;
        $(this.$refs.profileEl).css(
          "background-image",
          "url(" + this.profile.photos[this.currentPhoto].regular_url + ") "
        );
      } else {
        this.setCurrentProfile(this.profile.id);
      }
    },
  },
  mounted() {
    // console.log(this.$refs.profileEl);
    // console.log(this.profile.photos[this.currentPhoto].regular_url);
    $(this.$refs.profileEl).css(
      "background-image",
      "url(" + this.profile.photos[this.currentPhoto].regular_url + ") "
    );
  },
};
</script>
