<template>
  <section class="profiles" v-if="!loading">
    <ProfileCard
      v-for="profile in profiles"
      :key="profile.id"
      :profile="profile"
    />
  </section>
</template>

<script>
// import $ from "jquery";
import ProfileCard from "./ProfileCard";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Profiles",
  components: {
    ProfileCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["profiles", "loading"]),
  },
  methods: {
    ...mapActions(["getProfiles"]),
  },
  mounted() {
    this.getProfiles();
  },
};
</script>
