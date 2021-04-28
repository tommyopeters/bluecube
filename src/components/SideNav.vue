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
      <li class="active">
        <i class="fas fa-home"></i>
        <span>Home</span>
      </li>
      <li>
        <i class="fas fa-envelope"></i>
        <span>Message</span>
      </li>
    </ul>
    <ul class="share">
      <div>SHARE</div>
      <li>
        <i class="fas fa-home"></i>
        <span>Home</span>
      </li>
      <li>
        <i class="fas fa-envelope"></i>
        <span>Message</span>
      </li>
      <li>
        <i class="fas fa-home"></i>
        <span>Home</span>
      </li>
      <li>
        <i class="fas fa-envelope"></i>
        <span>Message</span>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "SideNav"
};
</script>
