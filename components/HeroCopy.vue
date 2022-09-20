<template>
  <!-- <div class="relative lg:grid lg:grid-cols-2 lg:gap "> -->
  <nuxt-layout name="section-copy" class="relative text-gray-600 mb-42 ">
    <template #header>
      <div class=" pb-2 text-4xl text-indigo-900 font-extrabold leading-10 ">
        Providing ICT fun & training for North Australia
      </div>
    </template>
    <template #default>
      <p class=" xs:max-w-[320px] ">
        Australia's northern home for creative games and digital movie production with complete pathway for tech
        entrepreneurs
        aged 15 ~ 25 and beyond.
      </p>
    </template>
    <template #footer>
      <button @click="openModal" class=" mr-4">
        <div class="flex items-center bg-indigo-900 pb-[1px] pl-4 pr-2 my-4 rounded-full flex-none ">
          <span class=" text-white tracking-wide ">Start now</span>
          <icons-app-right class=" h-5 w-5 text-white  " />
        </div>
      </button>

      <button>
        <div class="flex items-center py-1 pl-3 pr-1 my-3 rounded-full flex-none ">
          <span class=" text-indigo-900 font-medium tracking-wide ">Learn more</span>
          <icons-app-right class=" h-5 w-5 text-indigo-900  " />
        </div>
      </button>

    </template>
  </nuxt-layout>
  <!-- <div class=" opacity-0 lg:opacity-100 lg:overflow-visible ">
      <artboard-iphone></artboard-iphone>
    </div> -->
  <!-- </div> -->
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$emit('open')
    }
  }
}
</script>
