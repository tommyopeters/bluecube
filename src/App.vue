<template>
  <div class="wrapper">
    <SideNav v-if="!mobileView" />
    <div class="container">
      <Header />
      <Filters />
      <Profiles />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapActions, mapGetters } from "vuex";

import SideNav from "./components/SideNav.vue";
import Header from "./components/Header.vue";
import Filters from "./components/Filters.vue";
import Profiles from "./components/Profiles.vue";

export default {
  name: "App",
  components: {
    SideNav,
    Header,
    Filters,
    Profiles,
  },
  computed: {
    ...mapGetters(["mobileView"]),
  },
  methods: {
    ...mapActions(["setView"]),
  },
  mounted() {
    if (window.innerWidth <= 1100) {
      this.setView(true);
    } else {
      this.setView(false);
    }
    $(window).resize(() => {
      if (window.innerWidth <= 1100) {
        this.setView(true);
      } else {
        this.setView(false);
      }
    });

    $(".dropdown li:first-of-type").mouseover(function() {
      $(this)
        .parent()
        .addClass("hover-active");
    });
    $(".dropdown li:first-of-type").mouseout(function() {
      $(this)
        .parent()
        .removeClass("hover-active");
    });
    $(".notification-group .notification:first-of-type").mouseover(function() {
      $(this)
        .parent()
        .addClass("hover-active");
    });
    $(".notification-group .notification:first-of-type").mouseout(function() {
      $(this)
        .parent()
        .removeClass("hover-active");
    });
  },
};
</script>

<style lang="scss">
@import "https://use.fontawesome.com/releases/v5.8.2/css/all.css";
@import "https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,800&display=swap";

@import "./assets/sass/main.scss";
</style>
