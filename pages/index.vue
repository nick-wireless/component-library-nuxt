<template>
  <nuxt-layout name="default">
    <!-- Hero image & general description of The Array. -->
    <section class=" relative  ">
      <hero-image class=" absolute "></hero-image>
      <hero-copy @open="toggleStartHere" class=" absolute -mt-52 "></hero-copy>
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

    <section>
      <final-call-to-action @open="toggleModal" @openSponsorModal="toggleSponsorModal" ></final-call-to-action>
    </section>


    <div v-if="showModal">
      <modal-form-with-email @close="toggleModal"></modal-form-with-email>
    </div>
    <div v-if="showSponsorModal">
      <modal-form-with-email @close="toggleSponsorModal">
        <template #icon>
          <IconsAppSponsor />
        </template>
        <template #heading>
          Sponsors Corner
        </template>
        <div>
          <p>Totally awesome!  We look forward to working together to move Territorians & the North forward.</p>
          <p class="pt-2">Send through your email & we will reach out shortly.</p>
        </div>
      </modal-form-with-email>
    </div>
    <div v-if="showStartHere">
      <modal-form-with-email @close="toggleStartHere">
        <template #icon>
          <IconsAppStart />
        </template>
        <template #heading>
          Signup Papers
        </template>
        <div>
          <p>Welcome!  We're excited to work with you to enhance your capabilities and creativity.</p>
          <p class="pt-2">Submit your email & we will send information, for your first steps.</p>
        </div>
      </modal-form-with-email>
    </div>

  </nuxt-layout>
</template>

<script>
export default {
  data() {
    return {
      showStartHere: false,
      showModal: false,
      showSponsorModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleSponsorModal() {
      this.showSponsorModal = !this.showSponsorModal
    },
    toggleStartHere() {
      this.showStartHere = !this.showStartHere
    }
  }
  }
</script>

<style>
p {
  @apply my-1 tracking-wide font-normal text-gray-700
}
</style>