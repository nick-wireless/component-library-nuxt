<template>
  <!-- Will make this dark version with product types, light. -->
  <div class=" bg-gray-800  ">
    <nuxt-layout name="section-copy">
      <template #header>
        <nuxt-layout name="section-heading-body-lite">
          <template #subHeading>For programmers, gamers and creators</template>
          <template #default>Three overlapping verticals with engagement for everyone</template>
        </nuxt-layout>
      </template>
      <template #default>
        <p class=" max-w-[320px] text-gray-300 text-medium ">
          With support from the NT Government, we have established a new
          school of technology called The Array [ Learn ]. Situated with office spaces as an incubation hub, The Array
          [ Make ], plus national & international pathways
          for
          professional gamers, The Array [ Play ]. Read below for more details on what this may mean to you.
        </p>
      </template>
      <template #footer>
        <div class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 pb-16 ">
          <nuxt-layout name="section-attribute-lite">
            <template #copyIcon>
              <icons-app-certificate class=" h-8 w-8"></icons-app-certificate>
            </template>
            <template #copyTitle>Accredited Learning</template>
            <template #copyBody>Our learn vertical, The Array [ Learn ], provides accredited Cert III and Cert IV
              courses
              relevant to industry. We gate (limit) entry and thereafter offer accelerated learning
              paths, with career placement for graduates.
              <button class=" w-full ">
                <div class="flex items-center py-1 pr-1 my-3 rounded-full flex-none ">
                  <span class=" text-blue-300 font-semibold tracking-wide ">See certificates</span>
                  <icons-app-right class=" ml-2 h-5 w-5 text-blue-300 font-semibold" />
                </div>
              </button>
            </template>
          </nuxt-layout>

          <nuxt-layout name="section-attribute-lite">
            <template #copyIcon>
              <icons-app-game-controller class=" h-9 w-9"></icons-app-game-controller>
            </template>
            <template #copyTitle>Professional Gaming</template>
            <template #copyBody>
              Our gaming vertical, The Array [ Play ], offers sanctioned pathways to accredited
              tournaments with large prize pools. Our licenced gaming titles include, XYZ and more.

              <button class="w-full">
                <div class="flex items-center py-1 pr-1 my-3 rounded-full flex-none ">
                  <span class=" text-blue-300 font-semibold tracking-wide ">Expore pathways</span>
                  <icons-app-right class=" ml-2 h-5 w-5 text-blue-300 font-semibold" />
                </div>
              </button>
            </template>
          </nuxt-layout>

          <nuxt-layout name="section-attribute-lite">
            <template #copyIcon>
              <icons-app-train></icons-app-train>
            </template>
            <template #copyTitle>Incubators & Mentors</template>
            <template #copyBody>We have an open door policy for new products to self-select mentor & incubator partners.
              Find your right fit from people interested in your next steps with a commercial product.
              <button class=" w-full ">
                <div class="flex items-center py-1 pr-1 my-3 rounded-full flex-none ">
                  <span class=" text-blue-300 font-semibold tracking-wide ">Find mentor</span>
                  <icons-app-right class=" ml-2 h-5 w-5 text-blue-300 font-semibold" />
                </div>
              </button>
            </template>
          </nuxt-layout>

          <nuxt-layout name="section-attribute-lite">
            <template #copyIcon>
              <icons-app-together></icons-app-together>
            </template>
            <template #copyTitle>Our Partners</template>
            <template #copyBody>We are not in this alone. We have Asia Pacific’s leading Technology not-for-profit
              organisations standing with us, guiding us every step of the way.
              <button class=" w-full ">
                <div class="flex items-center py-1 pr-1 my-3 rounded-full flex-none ">
                  <span class=" text-blue-300 font-semibold tracking-wide ">Explore partners</span>
                  <icons-app-right class=" ml-2 h-5 w-5 text-blue-300 font-semibold" />
                </div>
              </button>
            </template>
          </nuxt-layout>
        </div>

      </template>
    </nuxt-layout>


  </div>
</template>