<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object,
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
          <p>{{ project.summary }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang=""></style>
