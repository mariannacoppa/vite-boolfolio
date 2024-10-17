<script>
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      store,
      project: null,
    };
  },
  methods: {
    getProject() {
      axios.get("INDIRIZZO").then((resp) => {
        if (resp.data.success) {
          this.project = resp.data.result;
        }
      });
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4">
        <img src="" alt="" />
      </div>
      <div class="col-12 col-md-6 col-lg-8">
        <h1>Titolo</h1>
        <p><strong>Tipologia: </strong>Tipo</p>
        <p><strong>Tecnologie: </strong>Tecnologie</p>
      </div>
      <div class="col-12">Contenuto</div>
    </div>
  </div>
</template>
<style lang="scss"></style>
