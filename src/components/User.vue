<template>
  <div
    class="user"
    @click="active = !active"
    tabindex="0"
    @blur="active = false"
  >
    <div class="user-image image-control vertical">
      <img src="@/assets/images/profile.png" alt="" />
      <div class="online-indicator"></div>
    </div>
    <div class="user-name">Abigail</div>
    <i class="fas fa-caret-down"></i>
    <ul class="dropdown" v-show="active">
      <li><i class="fas fa-user"></i><span>Account</span></li>
      <li><i class="fas fa-sign-out-alt"></i><span>Logout</span></li>
    </ul>
  </div>
</template>

@click="active = !active" tabindex="0" @blur="active = false"
<script>
export default {
  name: "User",
  data() {
    return {
      active: false,
    };
  },
  computed: {},
  methods: {
    //
  },
};
</script>
