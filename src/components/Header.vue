<template>
  <header>
    <div class="search">
      <i class="fas fa-search"></i>
      <input type="text" placeholder="Find Something..." />
      <div class="search-btn">Search</div>
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
export default {
  name: "SideNav"
};
</script>
