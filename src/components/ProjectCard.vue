<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },
  methods: {
    truncateText(text) {
      return text != null ? text.substr(0, 50) + "..." : "";
    },
  },
};
</script>
<template>
  <div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img
          :src="
            project.image != null
              ? `http://127.0.0.1:8000/storage/${project.image}`
              : 'https://placehold.co/600x400?text=Immagine+copertina'
          "
          alt=""
          class="card-img-top"
        />
        <div class="card-body">
          <h4 class="card-title">{{ project.name }}</h4>
          <p>
            <strong>Tipologia:</strong><br />{{
              project.type ? project.type.name : "Tipologia non definita"
            }}
          </p>
          <ul class="list-unstyled d-flex" v-if="project.technologies">
            <li
              class="me-1"
              v-for="tech in project.technologies"
              :key="tech.id"
            >
              {{ tech.name }}
            </li>
          </ul>
          <p>{{ truncateText(project.summary) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang=""></style>
