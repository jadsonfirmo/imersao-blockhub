<template>
  <div>
    <b-modal
      id="form-person-modal"
      v-model="show"
      centered
      title="Adicionar Pessoa"
      no-close-on-esc
      no-close-on-backdrop
    >
      <b-container fluid>
        <b-form>
          <b-form-group id="form-nome" label="Nome" label-for="nome">
            <b-form-input id="nome" v-model="form.nome" required></b-form-input>
          </b-form-group>

          <b-form-group
            id="form-sobrenome"
            label="Sobrenome"
            label-for="sobrenome"
          >
            <b-form-input
              id="sobrenome"
              v-model="form.sobrenome"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="form-idade" label="Idade" label-for="idade">
            <b-form-input
              id="idade"
              v-model="form.idade"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </b-form>
      </b-container>
      <template #modal-footer>
        <div class="w-100">
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="addPerson()"
            :disabled="emptyFields"
          >
            Salvar
          </b-button>
          <b-button
            variant="default"
            size="sm"
            class="float-right"
            @click="show = false"
          >
            Cancelar
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name:"FormPerson",
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      data: "",
      form: {
        nome: null,
        sobrenome: null,
        idade: null
      }
    };
  },
  computed: {
    emptyFields() {
      if (!this.form.nome || !this.form.idade) {
        return true;
      }
      return false;
    },
    show: {
      get: function() {
        return this.active;
      },
      set: function(value) {
        this.$emit("update:active", value);
      }
    }
  },
  watch: {
    show(value) {
      // Sempre que this.show for false, reseta o form
      if (!value) {
        this.resetForm();
      }
    }
  },
  methods: {
    addPerson() {
      this.$emit("addPerson", this.form);
    },
    resetForm() {
      Object.keys(this.form).forEach(key => {
        this.form[key] = null;
      });
    }
  }
};
</script>

<style scoped></style>
