<template>
  <span class=" grid grid-cols-1 gap-4 text-gray-800 ">
    <h1 class=" pb-2 text-4xl font-extrabold leading-10 ">
      <slot>Main Title</slot>
    </h1>
    <h2 class=" text-xl font-semibold italic tracking-wider max-w-xs ">
      <slot name="subHeading">Sub-heading</slot>
    </h2>
  </span>
</template>