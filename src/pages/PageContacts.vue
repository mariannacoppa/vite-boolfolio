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
    };
  },
  methods: {
    sendForm() {
      // axios call needs an object
      const data = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        content: this.content,
      };

      axios.post(`${store.baseURL}/contacts`, data).then((resp) => {
        if (resp.data.success) {
          this.name = "";
          this.surname = "";
          this.email = "";
          this.phone = "";
          this.content = "";
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
                name="name"
                id="name"
                v-model="name"
                placeholder="Nome"
              />
            </div>
            <div class="col-12 col-md-6">
              <label for="" class="control-label">Cognome</label>
              <input
                type="text"
                class="form-control"
                name="surname"
                id="surname"
                v-model="surname"
                placeholder="Cognome"
              />
            </div>
            <div class="col-12 col-md-6">
              <label for="" class="control-label">Email</label>
              <input
                type="text"
                class="form-control"
                name="email"
                id="email"
                v-model="email"
                placeholder="Email"
              />
            </div>
            <div class="col-12 col-md-6">
              <label for="" class="control-label">Telefono</label>
              <input
                type="text"
                class="form-control"
                name="phone"
                id="phone"
                v-model="phone"
                placeholder="Telefono"
              />
            </div>
            <div class="col-12 col-md-6">
              <label for="" class="control-label">Messaggio</label>
              <textarea
                type="text"
                class="form-control"
                name="content"
                id="content"
                v-model="content"
                placeholder="Messaggio"
              ></textarea>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-sm btn-success">
                Invia
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
