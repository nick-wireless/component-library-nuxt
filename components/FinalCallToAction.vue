<template>
  <!-- <div class="flex justify-center w-full ">
    <div class=" text-sm text-gray-600 h-6 w-6 ">
      <IconsAppDivider />
    </div>
  </div> -->

  <div class=" flex mt-8 mb-12 ">
    <button class=" ml-6 mr-4 flex-none">
      <div @click="openModal" class="flex items-center bg-indigo-900 pb-[1px] pl-4 pr-2 my-4 rounded-full flex-none ">
        <span class=" text-white tracking-wide py-1">Get in touch</span>
        <icons-app-right class=" h-5 w-5 text-white  " />
      </div>
    </button>

    <button>
      <div @click="openSponsorModal" class="flex items-center py-1 pl-3 pr-3 my-3 rounded-full flex-none ">
        <span class=" text-indigo-900 font-medium tracking-wide ">Become a sponsor</span>
        <icons-app-right class=" h-5 w-5 text-indigo-900  " />
      </div>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$emit('open')
    },
    openSponsorModal() {
      this.$emit('openSponsorModal')
    }
  }
}


</script>
