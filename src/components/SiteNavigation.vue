<template>
  <header class="sticky top-0 bg-white h-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav class="relative flex justify-between">
        <div class="w-24 md:w-36" id="logo-container">
          <a href="/#home">
            <img
              src="../assets/images/logo.png"
              alt="Vet de Casa"
              class="py-2 bg-transparent rounded-none"
            />
          </a>
        </div>
      <div class="flex items-center gap-x-5 md:gap-x-8 md:items-center">
        <div class="hidden md:flex md:gap-x-6">
          <NavigationLink
            v-for="link in navigation"
            :key="link.link"
            :link="link"
          />
        </div>
        <div>
          <a class="special-button text-primary hover:bg-secondary hover:text-white" href="/#contact">
            Contato
          </a>
        </div>

        <div class="md:hidden">
          <MenuComponent />
        </div>
      </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import MenuComponent from "./MenuComponent.vue";
import navigation from "../utils/navigation";
import NavigationLink from "./NavigationLink.vue";
</script>

<script>

export default {
  name: "SiteNavigation",
  components: {
    MenuComponent,
    NavigationLink
},
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const elementDOM = document.querySelector('header');

      if (window.scrollY > 0) {
        elementDOM.classList.add('scrolled');
      } else {
        elementDOM.classList.remove('scrolled');
      }
    }
  }
}
</script>
