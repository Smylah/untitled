<template>
  <NavBar />
  <IndexPage />
  <Footer />
</template>

<script lang="ts">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import IndexPage from "./Pages/index.vue";

export default {
  components: {
    NavBar,
    IndexPage,
    Footer,
  },
};
</script>

<style>
</style>
