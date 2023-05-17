<template>
  <div class="flex flex-col items-center w-1/2 lg:w-1/5 cursor-pointer">
    <img :src="service.icon" class="w-[130px] rounded-full bg-teal-500 p-5 sm:w-[150px]" />
    <h2>{{ service.title }}</h2>
    <p class="hidden font-PTSerif text-lg leading-7 text-justify">{{ service.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['service']
}
</script>