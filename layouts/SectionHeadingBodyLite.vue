<template>
  <span class=" grid grid-cols-1 gap-4 ">
    <h2 class=" text-md font-semibold italic tracking-wider max-w-xs text-gray-400">
      <slot name="subHeading">Sub-heading</slot>
    </h2>
    <h1 class=" text-3xl font-bold mt-2 text-blue-50 ">
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