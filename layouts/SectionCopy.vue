<template>
  <section class=" px-8 grid grid-cols-1 gap-y-8 pt-16 leading-8  ">
    <header class=" max-w-sm">
      <slot name="header">Header content</slot>
    </header>

    <slot>Body content</slot>

    <footer>
      <slot name="footer">Footer content</slot>
    </footer>
  </section>
</template>