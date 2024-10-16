<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";
import { store } from "../store";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      store,
      projects: [],
      last_page: null,
      current_page: null,
    };
  },
  methods: {
    getAllProjects() {
      axios.get(`${store.baseURL}/projects`).then((resp) => {
        this.projects = resp.data.results.data;
        this.last_page = resp.data.results.last_page;
        this.current_page = resp.data.results.current_page;
      });
    },
    goToPage(page) {
      axios
        .get(`${store.baseURL}/projects`, { params: { page: page } })
        .then((resp) => {
          this.projects = resp.data.results.data;
          this.current_page = resp.data.results.current_page;
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
            <li class="page-item" v-for="i in last_page">
              <a class="page-link" href="#" @click="goToPage(i)">{{ i }}</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
