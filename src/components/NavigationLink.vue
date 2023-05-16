<template>
  <a class="inline-block rounded-lg px-2 py-1 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900" :href="`/${link.link}`">
    {{ link.title }}
  </a>
</template>

<script>
export default {
  name: "NavigationLink",
  props: ["link"],
}
</script>
