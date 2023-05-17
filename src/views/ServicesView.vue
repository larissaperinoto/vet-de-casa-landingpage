<template>
  <section
    id="services"
    class="flex flex-col"
  >
    <h1>Serviços</h1>
    <div class="flex flex-wrap lg:gap-x-4 justify-evenly">
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