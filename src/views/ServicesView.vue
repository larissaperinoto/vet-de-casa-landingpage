<template>
  <section class="flex flex-col justify-center h-screen w-full" id="services">
    <h1>Serviços</h1>
    <div class="flex flex-wrap justify-evenly">
      <ServiceCard
        v-for="service in this.services"
        :key="services.title"
        :service="service"
      />
    </div>
  </section>
</template>

<script>
import services from '../utils/services';
import ServiceCard from '../components/ServiceCard.vue';
export default {
  components: {
    ServiceCard
  },
  data() {
    return {
      services: []
    }
  },
  mounted() {
    this.services = services;
  }
}
</script>