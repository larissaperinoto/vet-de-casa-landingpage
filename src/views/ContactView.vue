<template>
  <section id="contact" class="flex flex-col justify-content items-center sm:flex-row">
    <div class="w-full sm:w-1/2 md:w-1/2">
      <h1>Entre em contato</h1>
      <button class="special-button flex justify-center items-center w-90 mx-auto sm:w-1/2">
        <img src="https://img.icons8.com/office/480/whatsapp--v1.png" target="_blank" class="w-[50px] pr-2" />
          <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5542998091806">
            Converse com o profissional
          </a>
      </button>
    </div>
    <div class="w-full py-10 bg-teal-500 sm:w-1/2 flex flex-col justify-center items-start sm:rounded-l-[52px]">
      <ContactItem
        v-for="contact in this.contacts"
        :key="contact.content"
        :contact="contact"
      />
    </div>
  </section>
</template>

<script>
import ContactItem from '../components/ContactItem.vue';
import contacts from '../utils/contacts';

export default {
  name: "ContactView",
  components: {
    ContactItem,
  },
  data() {
    return {
      contacts: []
    }
  },
  mounted() {
    this.contacts = contacts;
  }
}
</script>
