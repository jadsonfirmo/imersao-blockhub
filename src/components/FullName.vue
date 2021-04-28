<template>
  <div>
    <!-- Componente de título -->
    <head-pages :title="'BlockHub! Builders'">
      <template v-slot:subtitle>
        <span>Imersão Pré Estágio</span>
      </template>
    </head-pages>

    <!-- Conteúdo da tela -->
    <div class="text-center mb-2">
      <h5>
        Monte seu nome completo
      </h5>
    </div>
    <div>
      <b-form-input
        id="nome"
        v-model="nome"
        placeholder="Digite o Nome"
        v-on:blur="generateName()"
      ></b-form-input>
    </div>
    <div>
      <b-form-input
        id="sobrenome"
        v-model="sobrenome"
        placeholder="Digite o Sobrenome"
        v-on:blur="generateName()"
      ></b-form-input>
    </div>

    <div v-if="hasName" class="text-center m-3">
      Habemus nome! 😍
    </div>
    <div v-show="nomeCompleto != ''" class="text-center show-full-name">
      <div>
        Nome Completo:
      </div>
      <span class="full-name">
        {{ nomeCompleto }}
      </span>
    </div>

    <div class="text-center">
      <b-button
        id="clear-btn"
        title="Limpar campos"
        class="bg-primary"
        v-on:click="clear()"
      >
        Limpar
      </b-button>
    </div>

    <!-- Lista de Atividades -->
    <div class="text-center mt-5 imersao">
      <div>
        <strong> Lista de Atividades - I Imersão 2021 </strong>
      </div>
      <div v-for="(item, i) in listaAtividades" :key="i">
        Semana {{ item.semana }} - {{ item.descricao }}
      </div>
    </div>

    <div class="text-center mt-5">
      <b-button
        id="back-btn"
        title="Voltar"
        class="bg-default"
        v-on:click="voltar()"
      >
        Voltar
      </b-button>
      <b-button
        id="back-btn"
        title="Limpar campos"
        class="bg-info"
        v-on:click="sair()"
      >
        Sair
      </b-button>
    </div>
  </div>
</template>

<script>
import HeadPages from "./includes/headPages.vue";

export default {
  components: {
    HeadPages
  },
  data() {
    return {
      nome: "",
      sobrenome: "",
      nomeCompleto: "",
      listaAtividades: [
        {
          semana: "1",
          descricao: "Introdução ☕"
        },
        {
          semana: "2",
          descricao: "Front-End ✨"
        },
        {
          semana: "3",
          descricao: "Back-End 🎲"
        },
        {
          semana: "4",
          descricao: "TCC ⚡"
        }
      ]
    };
  },
  computed: {
    hasName() {
      if (this.nome != "") return true;
      return false;
    }
  },
  methods: {
    clear() {
      this.nome = "";
      this.sobrenome = "";
      this.nomeCompleto = "";
    },
    generateName() {
      this.nomeCompleto = `${this.nome} ${this.sobrenome}`;
    },
    voltar() {
      this.$router.push({ name: "persons" });
    },
    sair() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped>
input {
  margin-bottom: 20px;
}
.show-full-name {
  margin: 15px;
}
.full-name {
  font-size: 20px;
  color: white;
}
.imersao {
  color: aliceblue;
}
</style>
