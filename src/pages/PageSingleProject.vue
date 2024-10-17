<script>
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      store,
      project: {},
    };
  },
  methods: {
    getProject() {
      // recupero l'indirizzo dalla lista delle rotte e recupero il parametro che ho passato alla rotta, che sarà usato nel backoffice per recuperare il progetto
      axios
        .get(`${store.baseURL}/projects/${this.$route.params.slug}`)
        .then((resp) => {
          if (resp.data.success) {
            this.project = resp.data.results;
          } else {
          }
          console.log(resp);
        });
    },
  },
  created() {
    this.getProject();
  },
};
</script>
<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-12 col-md-6 col-lg-4">
        <img
          class="img-fluid"
          :src="
            project?.image != null
              ? `http://127.0.0.1:8000/storage/${project?.image}`
              : 'https://placehold.co/600x400?text=Immagine+copertina'
          "
        />
      </div>
      <div class="col-12 col-md-6 col-lg-8">
        <h1>{{ project?.name }}</h1>
        <p>
          <strong>Tipologia: </strong
          >{{
            project?.type != null ? project?.type.name : "Nessuna tipologia"
          }}
        </p>
        <p v-if="project?.technologies?.length > 0">
          <strong>Tecnologie: </strong>
          <span class="pe-2" v-for="tech in project?.technologies">{{
            tech?.name
          }}</span>
        </p>
        <p v-else>Nessuna tecnologia</p>
      </div>
      <div class="col-12">{{ project?.summary }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content {
  margin-top: 30px;
}
</style>
