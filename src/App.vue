<template>
  <div class="flex flex-col font-Roboto">
    <SiteNavigation />
    <RouterView />
  </div>
</template>

<script setup>
import {RouterView} from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
</script>