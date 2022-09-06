<template>
  <div class=" flex flex-col items-center ">
    <div class=" w-6 h-6 m-6 fill-current text-gray-500 drop-shadow-lg ">
      <slot></slot>
    </div>
    <span class=" -mt-4 pb-2 px-4 mx-auto text-center text-gray-500">{{ iconName }}</span>
  </div>
</template>

<script>
export default {
  props: {
    iconName: String
  }
}
</script>

<style scoped>
</style>