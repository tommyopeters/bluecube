<template>
  <header>
    <div class="menu" v-if="mobileView" :class="{ active: menuActive }">
      <div class="hamburger" @click="menuActive = !menuActive">
        <span></span><span></span><span></span>
      </div>
      <SideNav>
        <ul class="user">
          <div>USER</div>
          <router-link to="/account" custom v-slot="{ isActive, navigate }">
            <li @click="navigate" :class="[isActive && 'active', 'nav-link']">
              <i class="fas fa-user"></i>
              <span>Account</span>
            </li>
          </router-link>
          <router-link to="/logout" custom v-slot="{ isActive, navigate }">
            <li @click="navigate" :class="[isActive && 'active', 'nav-link']">
              <i class="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </li>
          </router-link>
        </ul>
      </SideNav>
    </div>
    <div class="search">
      <i class="fas fa-search"></i>
      <input
        type="text"
        v-model="query"
        @keydown.enter="submit"
        placeholder="Find Something..."
      />
      <div class="search-btn" @click="submit">Search</div>
    </div>
    <Notification />
    <User v-if="!mobileView" />
  </header>
</template>

<script>
import Notification from "./Notification";
import SideNav from "./SideNav";
import User from "./User";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Header",
  components: { Notification, User, SideNav },
  data() {
    return {
      query: "",
      menuActive: false,
    };
  },
  computed: {
    ...mapGetters(["mobileView"]),
  },
  methods: {
    ...mapActions(["search"]),
    submit: function() {
      if (this.query !== "") {
        this.search(this.query);
      }
    },
  },
};
</script>
