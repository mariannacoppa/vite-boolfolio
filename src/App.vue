<script>
import axios from "axios";
export default {
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getAllProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((resp) => {
        this.projects = resp.data.results;
      });
    },
  },
  created() {
    this.getAllProjects();
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Elenco Progetti</h1>
      </div>
      <div class="col-12">
        <!-- elenco progetti -->
        <div class="row gy-3">
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="proj in projects"
            :key="proj.id"
          >
            <div class="card">
              <img
                :src="
                  proj.image != null
                    ? `http://127.0.0.1:8000/storage/${proj.image}`
                    : 'https://placehold.co/600x400?text=Immagine+copertina'
                "
                alt=""
                class="card-img-top"
              />
              <div class="card-body">
                <h4 class="card-title">{{ proj.name }}</h4>
                <p>{{ proj.summary }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "./styles/generals.scss";
</style>
