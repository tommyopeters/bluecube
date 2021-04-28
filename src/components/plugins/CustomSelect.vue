<template>
  <div class="custom-select-vue" @click="dropdownActive = !dropdownActive" tabindex="0" @blur="dropdownActive = false">
    <div class="select-selected-vue" value="selected.value">{{ selected.name }}</div>
    <div class="select-items-vue" :class="{ 'select-hide': !dropdownActive }">
      <div v-for="(value, index) in values" :key="index" @click="changeValue(value)" :value="value.value">{{ value.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    values: {
      type: Array,
      default: function() {
        return [
          {
            name: "Random Value 1",

            value: "random-value-1"
          },
          {
            name: "Random Value 2",

            value: "random-value-2"
          },
          {
            name: "Random Value 3",

            value: "random-value-3"
          }
        ];
      }
    },
    value: {
      type: String
    }
  },
  data() {
    return {
      dropdownActive: false,
      selected: {}
    };
  },
  methods: {
    changeValue: function(value) {
      this.selected = value;
      this.$emit("input", value.value);
    }
  },
  created() {
    if (typeof this.value == "undefined" || this.value == "") {
      this.selected = this.values[0];
      this.$emit("input", this.selected.value);
    } else {
      this.selected = this.values.filter(value => value.value == this.value)[0];
      this.$emit("input", this.selected.value);
    }
  }
};
</script>
