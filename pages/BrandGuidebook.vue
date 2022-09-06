<template>
  <div class="grid grid-cols-1 gap-y-12 justify-center pt-24 px-8 bg-gray-200">

    <!-- Iconography of The Array [ ], logo -->
    <nuxt-layout name="section-heading-hero">
      <template #default>1. The Array [ ] Logo Typeface</template>
      <template #subHeading>Suggested layouts of Logo.</template>
    </nuxt-layout>
    <artboard-logos></artboard-logos>
    <base-logo></base-logo>

    <!-- Icons used in production -->
    <nuxt-layout name="section-heading-hero">
      <template #default>2. Icon set for website</template>
      <template #subHeading>Various iconography from the website.</template>
    </nuxt-layout>
    <artboard-icons></artboard-icons>

    <!-- Image design for HeroImage on Homepage -->
    <nuxt-layout name="section-heading-hero">
      <template #default>3. Tailwind Mix-blend-overlay and Gradients</template>
      <template #subHeading>Mixing layers with hero image for different background affects.</template>
    </nuxt-layout>
    <artboard-pictures-and-overlays></artboard-pictures-and-overlays>

    <!-- Iphone image for home page -->
    <nuxt-layout name="section-heading-hero">
      <template #default>3. Tailwind's standard phone with custom messages</template>
      <template #subHeading>Trialing different messages for phone graphics.</template>
    </nuxt-layout>
    <artboard-iphone></artboard-iphone>

  </div>

</template>