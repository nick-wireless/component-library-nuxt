<template>
  <span>
    <div class=" mt-12 mb-4 h-8 w-8 text-blue-800 ">
      <slot name="copyIcon"></slot>
    </div>
    <h3 class=" font-semibold my-6 text-gray-900 ">
      <slot name="copyTitle"></slot>
    </h3>
    <p class=" xs:max-w-[320px] xs:mr-8 text-gray-600 leading-6 ">
      <slot name="copyBody"></slot>
    </p>
  </span>
</template>