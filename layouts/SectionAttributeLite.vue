<template>
  <span>
    <div class=" mt-12 mb-4 h-8 w-8 text-blue-300 ">
      <slot name="copyIcon"></slot>
    </div>
    <h3 class=" font-normal my-4 text-white ">
      <slot name="copyTitle"></slot>
    </h3>
    <p class=" xs:max-w-[320px] xs:mr-6 text-gray-300 leading-6 ">
      <slot name="copyBody"></slot>
    </p>
  </span>
</template>