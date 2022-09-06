<template>
  <nuxt-layout name="default">
    <!-- Hero image & general description of The Array. -->
    <section class=" relative  ">
      <hero-image class=" absolute "></hero-image>
      <hero-copy class=" absolute -mt-52 "></hero-copy>
    </section>

    <!-- Endorsement A: featured technologies. -->
    <section>
      <our-technologies></our-technologies>
    </section>

    <!-- General introduction / quesi mission. -->
    <section>
      <our-offering></our-offering>
    </section>


    <!-- What we do -->
    <section>
      <what-we-do></what-we-do>
    </section>

    <!-- Our 'why Darwin', statement. -->
    <section>
      <our-why></our-why>
    </section>

  </nuxt-layout>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style>
p {
  @apply my-1 tracking-wide font-normal text-gray-700
}
</style>