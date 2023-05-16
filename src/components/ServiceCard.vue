<template>
  <div class="flex flex-col items-center w-1/2 sm:w-1/2 md:w-40 cursor-pointer">
    <img :src="service.icon" class="w-[20vw] rounded-full bg-teal-500 p-5" />
    <h2 class="text-2xl py-5 font-Luckiest text-slate-700 text-center">{{ service.title }}</h2>
    <p class="hidden font-PTSerif text-lg leading-7 text-justify">{{ service.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['service']
}
</script>