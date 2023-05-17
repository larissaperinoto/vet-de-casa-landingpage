<template>
  <div class="flex gap-x-4 justify-center items-center pl-10">
    <img
      :src="contact.icon"
      :alt="contact.title"
      class="w-[50px] bg-transparent rounded-none"
    />
    <span class="text-white font-bold sm:text-xl">{{ contact.content }}</span>
  </div>
</template>

<script>
  export default {
    name: "ContactItem",
    props: ['contact'],
  }
</script>