<template>
  <nuxt-layout name="section-copy" class=" bg-gray-100 pb-16 ">
    <template #header>
      <nuxt-layout name="section-heading-body">
        <template #subHeading>Technology & creativity meet</template>
        <template #default>A city location to make, play & learn ICT stuff</template>
      </nuxt-layout>
    </template>
    <template #default>
      <div class=" flex flex-wrap ">
        <div>
          <p class=" xs:max-w-[320px] sm:pr-4 sm:mr-16 ">
            Planes, trains & automobiles - or rather games, digital movies, crytotechnologies and everything in between.
            Our
            structured learning & engagement pathways will enable you to join the most explosive industries on our
            planet.
          </p>
        </div>
        <div>
          <p class=" xs:max-w-[320px] mt-6 xs:mt-1 ">
            Additionally, we are a 'games-forward' institution. We promote, mentor & teach professional game play on
            some
            of
            the most
            important titles. Can’t find what you are after? Join our next class and build the next greatest thing.
          </p>
        </div>
      </div>
    </template>
    <template #footer>
      <h3 class="pt-4 pb-4 text-md font-semibold tracking-wide max-w-xs px-3 text-indigo-900 ">
        <icons-app-add-people class=" h-6 w-6 inline-block -mt-1 mr-2 " />
        Join our next site tour ...
      </h3>
      <button class=" mr-4">
        <div class="flex items-center bg-emerald-500 py-1 pl-4 pr-1 my-4 w-[230px] rounded-full flex-none ">
          <icons-app-teacher class=" inline-block w-8 h-8 font-medium text-white pr-3 pt-[0.5px]" />
          <span class=" text-white font-medium tracking-wide ">the array [ learn ]</span>
          <icons-app-right class=" h-7 w-7 text-white  " />
        </div>
      </button>
      <button class=" mr-4">
        <div class="flex items-center bg-slate-500 py-1 pl-4 pr-1 my-4 w-[230px] rounded-full flex-none ">
          <icons-app-make class=" inline-block stroke-bold w-8 h-8 text-white pr-3 " />
          <span class=" text-white font-medium tracking-wide ">the array [ make ]</span>
          <icons-app-right class=" h-7 w-7 text-white  " />
        </div>
      </button>
      <button class=" mr-4">
        <div class="flex items-center bg-indigo-500 py-1 pl-4 pr-1 my-4 w-[230px] rounded-full flex-none ">
          <icons-app-play class=" inline-block w-8 h-8 text-white pl-1 pr-3 " />
          <span class=" text-white font-medium tracking-wide ">the array [ play ]</span>
          <icons-app-right class=" h-7 w-7 text-white  " />
        </div>
      </button>
    </template>
  </nuxt-layout>
</template>