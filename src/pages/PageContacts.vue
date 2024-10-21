<script>
import { store } from "../store";
import axios from "axios";
export default {
  data() {
    return {
      store,
      name: "",
      surname: "",
      email: "",
      phone: "",
      content: "",
      errors: "",
      success: false,
      sending: false,
    };
  },
  methods: {
    sendForm() {
      this.success = false;
      this.sending = true;
      // axios call needs an object
      const data = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        content: this.content,
      };

      this.errors = {};

      axios.post(`${store.baseURL}/contacts`, data).then((resp) => {
        if (resp.data.success) {
          this.name = "";
          this.surname = "";
          this.email = "";
          this.phone = "";
          this.content = "";
          this.success = true;
          this.sending = false;
        } else {
          this.errors = resp.data.errors;
          this.sending = false;
        }
      });
    },
  },
};
</script>
<template>
  <div class="m-5">
    <div class="row gy-5">
      <div class="col-12">
        <h1 class="text-center">Contatti</h1>
      </div>
      <div class="col-12">
        <form action="" method="post" @submit.prevent="sendForm()">
          <div class="row gy-3">
            <div class="col-12 col-md-6">
              <label for="" class="control-label">Nome</label>
              <input
                type="text"
                class="form-control"
                :class="errors.name ? 'is-invalid' : ''"
                name="name"
                id="name"
                v-model="name"
                placeholder="Nome"
              />
              <p
                v-for="(error, index) in errors.name"
                :key="index"
                class="text-danger"
              >
                {{ error }}
              </p>
            </div>
            <div class="col-12 col-md-6">
              <label for="" class="control-label">Cognome</label>
              <input
                type="text"
                class="form-control"
                :class="errors.surname ? 'is-invalid' : ''"
                name="surname"
                id="surname"
                v-model="surname"
                placeholder="Cognome"
              />
              <p
                v-for="(error, index) in errors.surname"
                :key="index"
                class="text-danger"
              >
                {{ error }}
              </p>
            </div>
            <div class="col-12 col-md-6">
              <label for="" class="control-label">Email</label>
              <input
                type="text"
                class="form-control"
                :class="errors.email ? 'is-invalid' : ''"
                name="email"
                id="email"
                v-model="email"
                placeholder="Email"
              />
              <p
                v-for="(error, index) in errors.email"
                :key="index"
                class="text-danger"
              >
                {{ error }}
              </p>
            </div>
            <div class="col-12 col-md-6">
              <label for="" class="control-label">Telefono</label>
              <input
                type="text"
                class="form-control"
                :class="errors.phone ? 'is-invalid' : ''"
                name="phone"
                id="phone"
                v-model="phone"
                placeholder="Telefono"
              />
              <p
                v-for="(error, index) in errors.phone"
                :key="index"
                class="text-danger"
              >
                {{ error }}
              </p>
            </div>
            <div class="col-12 col-md-6">
              <label for="" class="control-label">Messaggio</label>
              <textarea
                type="text"
                class="form-control"
                :class="errors.content ? 'is-invalid' : ''"
                name="content"
                id="content"
                v-model="content"
                placeholder="Messaggio"
              ></textarea>
              <p
                v-for="(error, index) in errors.content"
                :key="index"
                class="text-danger"
              >
                {{ error }}
              </p>
            </div>
            <div class="col-12">
              <button
                type="submit"
                class="btn btn-sm btn-success mb-2"
                :disabled="sending"
              >
                {{ sending ? "Invio in corso..." : "Invia" }}
              </button>
            </div>
          </div>
        </form>
        <div v-if="success != false" class="alert alert-success">
          Email inviata correttamente: ti contatteremo al più presto.
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
