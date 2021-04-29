<template>
  <header>
    <div class="search">
      <i class="fas fa-search"></i>
      <input type="text" v-model="query" placeholder="Find Something..." />
      <div class="search-btn" @click="submit">Search</div>
    </div>
    <div class="notifications">
      <i class="fas fa-bell"></i>
      <div class="notification-counter">3</div>
    </div>
    <div class="user">
      <div class="user-image image-control vertical">
        <img src="@/assets/images/profile.png" alt="" />
        <div class="online-indicator"></div>
      </div>
      <div class="user-name">Abigail</div>
      <i class="fas fa-caret-down"></i>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SideNav",
  data() {
    return {
      query: "",
    };
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
