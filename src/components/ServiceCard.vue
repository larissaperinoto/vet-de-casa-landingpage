<template>
  <button
    class="flex flex-col items-center w-1/2 lg:w-1/5 cursor-pointer"
    v-on:click="() => showContent(service)"
  >
    <img
      :src="service.icon"
      class="w-[130px] p-10 sm:w-[150px] md:w-[200px]"
    />
    <h2>{{ service.title }}</h2>
  </button>
</template>

<script>
export default {
  props: ['service', 'showContent'],
}
</script>