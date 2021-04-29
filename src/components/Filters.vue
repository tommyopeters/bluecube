<template>
  <section class="filters">
    <div class="filter">
      <CustomSelect :values="[{ name: 'World', value: 'World' }]" />
    </div>
    <div class="filter">
      <CustomSelect :values="[{ name: 'Following', value: 'Following' }]" />
    </div>
    <div class="filter">
      <CustomSelect :values="[{ name: 'Popular', value: 'Popular' }]" />
    </div>
    <div class="filter">
      <CustomSelect :values="[{ name: 'Post', value: 'Post' }]" />
    </div>
    <div class="filter">
      <CustomSelect :values="[{ name: 'Gender', value: 'Gender' }]" />
    </div>
    <div class="filter">
      <CustomSelect :values="[{ name: 'Location', value: 'Location' }]" />
    </div>
    <div class="filter">
      <CustomSelect :values="[{ name: 'Profession', value: 'Profession' }]" />
    </div>
  </section>
</template>

<script>
import CustomSelect from "./plugins/CustomSelect";

export default {
  name: "Filters",
  components: {
    CustomSelect,
  },
};
</script>
