<template>
  <div id="persons">
    <!-- Componente de título -->
    <head-pages :title="'BlockHub! Builders'">
      <template v-slot:subtitle>
        <span>Imersão Pré Estágio</span>
      </template>
    </head-pages>

    <!-- Conteúdo da Tela -->
    <div class="text-center mb-3">
      <h4>Cadastro de Pessoas</h4>
    </div>
    <div class="text-right pt-3 pb-3">
      <b-button
        id="add-btn"
        title="Adicionar pessoa"
        class="bg-success"
        @click="add()"
      >
        Adicionar
      </b-button>
    </div>
    <div class="table">
      <b-table striped hover :items="items" :fields="fields" show-empty>
        <template v-slot:cell()="{ value }">
          <template>
            <i>{{ value }}</i>
          </template>
        </template>

        <template v-slot:cell(opcoes)="{ item, index }">
          <b-button
            id="remove-btn"
            title="Remover pessoa"
            class="bg-danger"
            @click="remove(index, item)"
          >
            <b-icon icon="trash"></b-icon>
          </b-button>
        </template>

        <template #empty="">
          <div class="text-center">
            <h6>Nenhum resultado encontrado</h6>
          </div>
        </template>
      </b-table>
    </div>

    <div class="text-center mt-5">
      <b-button id="remove-btn" class="bg-primary" v-on:click="verMais()">
        Ver mais
      </b-button>
    </div>

    <!-- Alerta de sucesso -->
    <b-alert
      variant="success"
      :show="dismissCountDown"
      dismissible
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      Successo! ({{ dismissCountDown }} ...)
    </b-alert>

    <!-- Alerta de erro -->
    <b-alert v-model="error" variant="danger" dismissible>
      Oops! Algo errado ocorreu!
    </b-alert>

    <!-- Componente Modal Pessoa -->
    <form-person :active.sync="active" @addPerson="addItem"></form-person>
  </div>
</template>

<script>
import HeadPages from "./includes/headPages.vue";
import FormPerson from "./modals/FormPerson.vue";

export default {
  components: {
    FormPerson,
    HeadPages
  },
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      error: false,

      active: false,

      items: [
        { idade: 40, nome: "Dickerson", sobrenome: "Macdonald" },
        { idade: 21, nome: "Larsen", sobrenome: "Shaw" },
        { idade: 89, nome: "Geneva", sobrenome: "Wilson" },
        { idade: 38, nome: "Jami", sobrenome: "Carney" }
      ],
      fields: [
        {
          key: "idade",
          label: "Idade",
          sortable: true
        },
        {
          key: "nome",
          label: "Nome",
          sortable: true
        },
        {
          key: "sobrenome",
          label: "Sobrenome",
          sortable: true
        },
        {
          key: "opcoes",
          label: "Opções"
        }
      ]
    };
  },
  methods: {
    add() {
      this.active = true;
    },

    remove(index, item = {}) {
      this.items.splice(index, 1);
      this.dismissCountDown = this.dismissSecs;
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },

    addItem(form) {
      this.items.push({
        idade: form.idade,
        nome: form.nome,
        sobrenome: form.sobrenome
      });
      this.active = false;
    },

    verMais() {
      this.$router.push({ name: "fullName" });
    }
  }
};
</script>

<style scoped>
#persons,
.table {
  color: white;
}
</style>
