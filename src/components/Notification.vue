<template>
  <div
    class="notifications"
    @click="active = !active"
    tabindex="0"
    @blur="active = false"
  >
    <i class="fas fa-bell"></i>
    <div class="notification-counter">{{ notifications.length }}</div>
    <div class="notification-group" v-show="active">
      <div
        class="notification"
        v-for="(notif, index) in notifications"
        :key="index"
      >
        <div class="image-control">
          <img :src="notif.image" alt="" />
        </div>
        <div class="notification-details">
          <div class="message">{{ notif.message }}</div>
          <div class="time">{{ notif.time }}</div>
        </div>
        <div class="notification-icon" :class="notif.type">
          <i class="fas fa-heart"></i>
          <i class="fas fa-comment-alt"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Notification",
  data() {
    return {
      active: false,
    };
  },
  computed: {
    ...mapGetters(["notifications"]),
  },
  methods: {
    //
  },
};
</script>
