<template>
  <div class=" absolute z-50 pt-8 flex items-center place-content-between w-full ">
    <base-logo></base-logo>
    <base-icon class=" -mt-2 mr-3 relative md:hidden ">
      <div class="absolute -mt-1 -ml-[0.7rem] bg-green-300 w-full h-8 w-12 px-2 rounded-full opacity-40 "></div>
      <icons-app-menu class=" absolute h-6 z-60 text-white " />
    </base-icon>
    <div class="hidden md:flex text-md font-semibold tracking-wider drop-shadow-2xl text-white pr-12">
      <div class=" px-6 ">Play</div>
      <div class=" px-6 ">Learn</div>
      <div class=" px-6 ">Make</div>
      <div class=" px-6 ">About</div>
    </div>
  </div>
</template>