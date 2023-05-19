<template>
  <section
    id="servicos"
    class="flex flex-col"
  >
    <div>
      <h1 class="pb-5">Serviços</h1>
      <p class="text-center pb-5">Clique em um serviço para saber mais.</p>
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
      class="hidden w-full h-screen bg-white absolute flex items-center justify-center"
      id="serviceDescription"
    >
      <div
        class="lg:w-1/2 bg-white m-auto p-5 sm:p-6 md:p-7 lg:p-8 md:rounded-[52px] md:border md:shadow-md"
      >
        <div class="flex justify-start">
          <button v-on:click="hiddeContent">
            <img
              src="https://img.icons8.com/ios-filled/50/737373/delete-sign--v1.png"
              alt="Fechar"
              class="bg-transparent rounded-none w-[30px] "
            />
          </button>
        </div>
        <div class="flex flex-row items-center gap-x-4 justify-center">
          <img
            :src="this.serviceSelected.icon"
            class="w-[50px] p-2"
          />
          <h2>{{ this.serviceSelected.title }}</h2>
        </div>
          <p class="mx-auto">{{ this.serviceSelected.content }}</p>
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