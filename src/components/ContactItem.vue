<template>
  <div class="flex justify-content items-center pl-10 pb-5">
    <img :src="contact.icon" class="w-[50px] mr-2" />
    <p class="text-white font-bold sm:text-xl">{{ contact.content }}</p>
  </div>
</template>

<script>
  export default {
    name: "ContactItem",
    props: ['contact'],
    mounted() {
      console.log(this.contact)
    }
  }
</script>