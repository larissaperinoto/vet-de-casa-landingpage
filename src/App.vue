<template>
  <div>
    <SiteNavigation />
    <main>
      <HomeView />
      <Services />
      <AboutView />
      <PlacesView />
      <ContactView />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import SiteNavigation from "./components/SiteNavigation.vue";
import HomeView from "./views/HomeView.vue";
import Services from "./views/ServicesView.vue";
import AboutView from "./views/AboutView.vue";
import PlacesView from "./views/PlacesView.vue";
import ContactView from "./views/ContactView.vue"
import FooterComponent from "./components/FooterComponent.vue";
</script>