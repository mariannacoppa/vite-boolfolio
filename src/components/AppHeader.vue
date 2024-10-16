<script>
export default {
  props: {
    menu: Array,
  },
};
</script>
<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <ul class="list-unstyled d-flex">
            <li class="me-2" v-for="(item, index) in menu" :key="index">
              <router-link :to="{ name: item.name }">{{
                item.label
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss"></style>
