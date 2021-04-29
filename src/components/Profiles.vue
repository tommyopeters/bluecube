<template>
  <section class="profiles" v-if="!loading">
    <ProfileCard
      v-for="profile in profiles"
      :key="profile.id"
      :profile="profile"
    />
  </section>
  <section class="profiles" v-else-if="!emptyResult">
    <loading :active.sync="loading" :is-full-page="true"></loading>
  </section>
  <section class="profiles" v-else>
    No Result Found
  </section>
</template>

<script>
// import $ from "jquery";
import Loading from "vue-loading-overlay";
import ProfileCard from "./ProfileCard";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Profiles",
  components: {
    ProfileCard,
    Loading,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["profiles", "loading", "emptyResult"]),
  },
  methods: {
    ...mapActions(["getProfiles"]),
  },
  mounted() {
    this.getProfiles();
  },
};
</script>
