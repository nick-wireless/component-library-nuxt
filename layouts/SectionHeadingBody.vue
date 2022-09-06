<template>
  <span class=" grid grid-cols-1 gap-4 text-gray-800 ">
    <h2 class=" text-md font-semibold italic tracking-wider max-w-xs ">
      <slot name="subHeading">Sub-heading</slot>
    </h2>
    <h1 class=" text-3xl font-bold mt-2">
      <slot>Main Title</slot>
    </h1>
  </span>
</template>

<script>
export default {
  props: ['isDark']
}
</script>

<style scoped>
.dark {
  @apply text-white
}
</style>