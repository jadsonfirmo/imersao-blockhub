<template>
  <div>
    <div class="head-title">
      {{ title }}
    </div>
    <div class="head-subtitle">
      <slot name="subtitle"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "headPages",
  props: {
    title: {
      type: String,
      required: false,
      default: "BlockHub!"
    }
  },
  methods: {

  }
};
</script>

<style scoped>
@import "../../assets/styles/global.css";
.head-title {
  color: aqua;
  text-align: center;
  margin-bottom: 5px;
  font-size: 1.8em;
  font-weight: 600;
}
</style>
