<template>
  <!-- navbar -->
  <nav class="py-4 text-gray-600 border-b font-semibold">
    <div
      class="
        relative
        container-centre
        flex-r
        box-border
        items-center
        justify-between
        space-x-8
      "
    >
      <!-- logo -->
      <div>
        <p>UntitledUI</p>
      </div>
      <!-- nav-links -->
      <div class="container hidden justify-start space-x-8 flex-r">
        <a href="">Home</a>
        <a href="">Products<i class="fa-solid fa-chevron-down" /></a>
        <a href="">Resources<i class="fa-solid fa-chevron-down" /></a>
        <a href="">Pricing</a>
      </div>
      <!-- signup and login -->
      <div class="justify-between hidden flex-r">
        <a href="" class="py-2.5 px-5 white-button">Login</a>
        <a href="" class="py-2.5 px-5 purple-button">Signup</a>
      </div>

      <!-- hamburger -->
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "NavBar",
  components: {},
});
</script>

<style scoped>
</style>
