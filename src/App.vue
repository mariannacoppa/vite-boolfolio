<script>
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getAllProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((resp) => {
        this.projects = resp.data.results.data;
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
          <ProjectCard
            v-for="proj in projects"
            :key="proj.id"
            :project="proj"
          />
        </div>
      </div>
      <div class="col-12">
        <nav
          aria-label="Page navigation example"
          class="d-flex justify-content-center"
        >
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "./styles/generals.scss";
</style>
