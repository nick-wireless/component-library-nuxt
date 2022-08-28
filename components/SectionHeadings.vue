<template>
  <span class=" grid grid-cols-1 gap-4 ">
    <h2 class=" text-xl pb-2 max-w-xs ">
      <slot name="subHeading">Sub-heading</slot>
    </h2>
    <h1 class=" text-4xl ">
      <slot>Main Title</slot>
    </h1>
  </span>
</template>