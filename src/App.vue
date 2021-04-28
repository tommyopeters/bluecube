<template>
  <div class="wrapper">
    <SideNav />
    <div class="container">
      <Header />
      <Filters />
      <Users />
    </div>
  </div>
</template>

<script>
import SideNav from "./components/SideNav.vue";
import Header from "./components/Header.vue";
import Filters from "./components/Filters.vue";
import Users from "./components/Users.vue";

export default {
  name: "App",
  components: {
    SideNav,
    Header,
    Filters,
    Users
  },
  created() {
    console.log(this.$store.state.count);
  }
};
</script>

<style lang="scss">
@import "https://use.fontawesome.com/releases/v5.8.2/css/all.css";
@import "https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,800&display=swap";

@import "./assets/sass/main.scss";
</style>
