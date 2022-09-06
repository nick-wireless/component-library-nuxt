<template>
  <nuxt-layout name="section-copy" class="relative text-gray-600 mb-42">
    <template #header>
      <nuxt-layout name="section-heading-hero">
        <template #subHeading>Designed for gamers, programmers & creatives</template>
        <template #default>Three verticals and engagement for everyone</template>
      </nuxt-layout>
    </template>
    <template #default>
      <p class=" max-w-[320px] ">
        With support from the NT Government, we have established a new
        school of technology called The Array [ learn ], combined with office spaces and incubation hub, The Array
        [ make ] and national & international pathways
        for
        professional gamers, The Array [ play ]. Read below for more details on what this may offer you.
      </p>
    </template>
    <template #footer>
      <div class="sm:flex items-center space-between-items flex-wrap">
        <button>
          <div class="flex items-center bg-blue-600 py-1 pl-1 pr-1 my-4 rounded-full flex-none ">
            <icons-app-enroll class=" h-6 w-6 text-white mx-3 " />
            <span class=" text-white tracking-wide ">Enroll today</span>
            <icons-app-right class=" h-7 w-7 text-white  " />
          </div>
        </button>
        <div class="px-4"></div>
        <button class="flex items-center bg-blue-100 py-1 pl-4 rounded-full flex-none ">
          <span>Signup for newsletter</span>
          <icons-app-right class=" h-7 w-7 text-black  " />
        </button>
      </div>
    </template>
  </nuxt-layout>
</template>