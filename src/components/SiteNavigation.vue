<template>
  <header class="py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav class="relative z-50 flex justify-between">
        <div class="flex items-center md:gap-x-12">
          <a aria-label="Home" href="/#">
            <img class="w-36" src="../assets/images/logo.png" />
          </a>
        </div>
      <div class="flex items-center gap-x-5 md:gap-x-8">
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
          <a class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600" href="/register">
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

<style scoped>

</style>
