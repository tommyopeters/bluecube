<template>
  <aside>
    <div class="aside-header">
      <div class="logo">
        <div class="image-control vertical">
          <img src="@/assets/images/bluecube_logo.png" alt="" />
        </div>
        <div class="logo-text">bluecube</div>
      </div>
    </div>
    <ul class="nav-links">
      <router-link to="/home" custom v-slot="{ isActive, navigate }">
        <li @click="navigate" :class="[isActive && 'active', 'nav-link']">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </li>
      </router-link>

      <router-link to="/message" custom v-slot="{ isActive, navigate }">
        <li @click="navigate" :class="[isActive && 'active', 'nav-link']">
          <i class="fas fa-envelope"></i>
          <span>Message</span>
        </li>
      </router-link>
    </ul>
    <ul class="share">
      <div>SHARE</div>
      <router-link to="/ranking" custom v-slot="{ isActive, navigate }">
        <li @click="navigate" :class="[isActive && 'active', 'nav-link']">
          <i class="fas fa-home"></i>
          <span>Ranking</span>
        </li>
      </router-link>
      <router-link to="/challenge" custom v-slot="{ isActive, navigate }">
        <li @click="navigate" :class="[isActive && 'active', 'nav-link']">
          <i class="fas fa-envelope"></i>
          <span>Challenge</span>
        </li>
      </router-link>
      <router-link to="/party" custom v-slot="{ isActive, navigate }">
        <li @click="navigate" :class="[isActive && 'active', 'nav-link']">
          <i class="fas fa-home"></i>
          <span>Party</span>
        </li>
      </router-link>
      <router-link to="/connect" custom v-slot="{ isActive, navigate }">
        <li @click="navigate" :class="[isActive && 'active', 'nav-link']">
          <i class="fas fa-envelope"></i>
          <span>Connect</span>
        </li>
      </router-link>
      <router-link to="/parade" custom v-slot="{ isActive, navigate }">
        <li @click="navigate" :class="[isActive && 'active', 'nav-link']">
          <i class="fas fa-envelope"></i>
          <span>Parade</span>
        </li>
      </router-link>
      <router-link to="/group" custom v-slot="{ isActive, navigate }">
        <li @click="navigate" :class="[isActive && 'active', 'nav-link']">
          <i class="fas fa-envelope"></i>
          <span>Group</span>
        </li>
      </router-link>
    </ul>
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: "SideNav",
};
</script>
