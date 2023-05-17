<template>
  <section
    id="services"
    class="flex flex-col"
  >
    <div>
      <h1>Serviços</h1>
      <div class="flex flex-wrap lg:gap-x-4 justify-evenly">
        <ServiceCard
          v-for="service in this.services"
          :key="services.title"
          :service="service"
          :showContent="showContent"
        />
      </div>
    </div>
    <div
      class="hidden w-full bg-white absolute"
      id="serviceDescription"
    >
      <div class="w-full lg:w-1/2 rounded-[52px] m-auto p-8 border shadow-md">
        <div class="flex justify-start">
          <button v-on:click="hiddeContent">
            <img
              src="https://img.icons8.com/ios-filled/50/737373/delete-sign--v1.png"
              alt="Fechar"
              class="bg-transparent rounded-none w-[20px]"
            />
          </button>
        </div>
        <div class="flex row items-center gap-x-4 justify-center">
          <img
            :src="this.serviceSelected.icon"
            class="w-[50px] p-2"
          />
          <h2>{{ this.serviceSelected.title }}</h2>
        </div>
          <p class=" mx-auto">{{ this.serviceSelected.content }}</p>
      </div>
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
      services: [],
      serviceSelected: "",
    }
  },
  mounted() {
    this.services = services;
  },
  methods: {
    showContent(service) {
      this.serviceSelected = service;
      const element = document.getElementById('serviceDescription');
      element.classList.remove('hidden');
    },
    hiddeContent() {
      const element = document.getElementById('serviceDescription');
      element.classList.add('hidden');
    }
  }
}
</script>