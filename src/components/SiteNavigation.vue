<template>
  <header class="sticky top-0 bg-white w-full py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav class="relative z-50 flex justify-between">
        <div class="flex items-center w-24 md:gap-x-12 md:w-36" id="logo-container">
          <a href="/#">
            <img src="../assets/images/logo.png"/>
          </a>
        </div>
      <div class="flex items-center gap-x-5 md:gap-x-8 md:items-center">
        <div class="hidden md:flex md:gap-x-6">
          <a class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/#home">
            Início
          </a>
          <a class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/#services">
            Serviços
          </a>
          <a class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/#about">
            Sobre
          </a>
        </div>
        <div>
          <a class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white" href="/contact">
            Contato
          </a>
        </div>

        <div class="-mr-1 md:hidden">
          <MenuComponent />
        </div>
      </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import MenuComponent from "./MenuComponent.vue";
</script>

<script>

export default {
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
