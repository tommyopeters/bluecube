<template>
  <section class="filters">
    <div class="filter">
      <CustomSelect />
    </div>
    <div class="filter">
      <CustomSelect />
    </div>
    <div class="filter">
      <CustomSelect />
    </div>
    <div class="filter">
      <CustomSelect />
    </div>
    <div class="filter">
      <CustomSelect />
    </div>
    <div class="filter">
      <CustomSelect />
    </div>
    <div class="filter">
      <CustomSelect />
    </div>
  </section>
</template>

<script>
import CustomSelect from "./plugins/CustomSelect";

export default {
  name: "Filters",
  components: {
    CustomSelect
  }
};
</script>
