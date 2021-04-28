<template>
  <div class="content-page">
    <div class="text-center">
      <div>
        <h1 class="display-2 font-weight-bold mb-5 title-head">
          {{ title }}
        </h1>
        <h2 class="font-weight-normal title-head">
          {{ subtitle }}
        </h2>
        <h5 class="m-5">
          #imersaoBlockHub #coding #frontEnd
          </h5>
      </div>
    </div>

    <div class="text-center mt-5">
      <div>
        <b-button variant="primary" @click="letsGo()">Let's code!</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    title: "Olá, DEV!",
    subtitle: "Bem vindo ao front-end coding da Imersão Pré Estágio da BlockHub!"
  }),
  methods: {
    letsGo() {
      this.$router.push({ name: "persons" });
    }
  }
};
</script>

<style scoped>
.content-page {
  text-align: center;
}
.title-head {
  color: blanchedalmond;
}
</style>
