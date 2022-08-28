<template>
  <section class=" grid grid-cols-1 gap-y-8 max-w-xl ">
    <header>
      <slot name="header">Header content</slot>
    </header>
    <p class=" leading-8 tracking-wide font-normal ">
      <slot>Body content</slot>
    </p>
    <footer>
      <slot name="footer">Footer content</slot>
    </footer>
  </section>
</template>