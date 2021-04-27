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
      </div>
    </div>

    <div class="text-center mt-5">
      <div>
        <b-button variant="primary" @click="letsGo()">Vamos lá!</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    title: "Olá, DEV!",
    subtitle: "Bem vindo ao #coding da Imersão Pré Estágio da BlockHub!"
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
