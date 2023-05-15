<template>
  <div class="flex flex-col font-Roboto">
    <SiteNavigation />
    <HomeView />
  </div>
</template>

<script setup>
import {RouterView} from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
import HomeView from "./views/HomeView.vue";
</script>