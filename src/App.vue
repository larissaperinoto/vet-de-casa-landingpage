<template>
  <div class="flex flex-col font-Roboto">
      <SiteNavigation />
      <HomeView />
    <Services />
  </div>
</template>

<script setup>
import {RouterView} from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
import HomeView from "./views/HomeView.vue";
import Services from "./views/ServicesView.vue";
</script>