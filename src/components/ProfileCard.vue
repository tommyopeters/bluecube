<template>
  <div class="profile" ref="profileEl">
    <div class="photo-bars">
      <div
        class="photo-bar"
        v-for="(photo, index) in profile.photos"
        :key="index"
      ></div>
    </div>
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
</template>

<script>
import $ from "jquery";

export default {
  name: "ProfileCard",
  data() {
    return {
      currentPhoto: 0,
    };
  },
  props: ["profile"],
  computed: {},
  methods: {},
  mounted() {
    console.log(this.$refs.profileEl);
    console.log(this.profile.photos[this.currentPhoto].regular_url);
    $(this.$refs.profileEl).css(
      "background-image",
      "url(" + this.profile.photos[this.currentPhoto].regular_url + ") "
    );
  },
};
</script>
