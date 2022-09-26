<template>
  <!-- General layout  -->

  <!-- Section 1: Tagged header  -->
  <nuxt-layout class=" px-6 pt-16 max-w-sm lg:pb-8 " name="section-heading-body">
    <template #subHeading>Why Darwin & why The Victoria Hotel</template>
    <template #default>‘Give me a place to stand and with the right lever I will move the world’,
      Archemides</template>
  </nuxt-layout>

  <div class=" px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 pb-16">
    <!-- Section 2: Attribute list  -->

    <nuxt-layout name="section-attribute">
      <template #copyIcon>
        <icons-app-cable></icons-app-cable>
      </template>
      <template #copyTitle>Fibre to the world</template>
      <template #copyBody>
        <p>
          Darwin as Australia’s northern most capital has 5 under-sea cables ‘at their door’. These data highways
          provide
          the most populated English as a national language city with latency sub 50ms 1.5 bill people and sub 100ms
          to
          6.0 bill people.
        </p>
        <p class=" pt-3 ">
          For gaming, data & internet enabled technologies, latency matters and Darwin as a basecamp is designed for
          technologies
          designed for the world.
        </p>
      </template>
    </nuxt-layout>

    <nuxt-layout name="section-attribute" class=" lg:mx-4 ">
      <template #copyIcon>
        <icons-app-postcard></icons-app-postcard>
      </template>
      <template #copyTitle>Think globally act locally</template>
      <template #copyBody>
        <p>
          As a postcard to Darwin’s past and future, the re-imagination of The Victoria Hotel can be a catalyst to
          accelerate a new cultural aspiration in to the Territory & Northern Australia - a technology forward
          community.
        </p>
      </template>
    </nuxt-layout>

    <nuxt-layout name="section-attribute">
      <template #copyIcon>
        <icons-app-productivity></icons-app-productivity>
      </template>
      <template #copyTitle>We have a lot to do</template>
      <template #copyBody>
        <p>
          The Territory & Northern Australia has a lot to do. To put in context, Victoria State Government’s largest
          project in the last 10 years was $6.7 Bill. The Territory’s $37 Bill. Looking
          forward into the next 5 years we
          have $40 Billion in Investment Territory’s pipeline across diverse industries such as Aerospace, Defence,
          Resources, Health & Education & enabling remote infrastructure.
        </p>
      </template>
    </nuxt-layout>

    <nuxt-layout name="section-attribute">
      <template #copyIcon>
        <icons-app-create-movie></icons-app-create-movie>
      </template>
      <template #copyTitle>Look this way</template>
      <template #copyBody>
        <p>
          ICT is hungry for Indigenous creativity. Rephrased ICT is hungry for creativity with a unique point of view.
          Territorians are bound in a
          multicultural, indigenous landscape, constrained by distance and population. Each has a unique prospective so
          unlike the norms of
          city life. Make your own mark, express your differences.
        </p>
      </template>
    </nuxt-layout>
  </div>
</template>