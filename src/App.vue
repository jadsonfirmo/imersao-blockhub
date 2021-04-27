<template>
  <div id="app">
    <div class="container p-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "./assets/styles/variables";
@import "./assets/styles/bootstrap";

html,
body {
  height: 100%;
  width: 100%;
}

#app,
.container {
  min-height: 100%;
  min-width: 100%;
}

#app {
  background: linear-gradient(
    120deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(137, 0, 177, 1) 100%
  );
}

.container {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.modal-backdrop {
  opacity: 0.4;
}
</style>
