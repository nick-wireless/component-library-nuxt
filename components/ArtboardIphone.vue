<template>
  <div
    class="relative h-[712px] w-[350px] bg-black rounded-[60px] shadow-2xl overflow-hidden border-[14px] border-black ">
    <img src="@/assets/photos/daniel-olah.jpg" class=" absolute inset-0 h-full w-full object-cover " />
    <div class=" absolute inset-0 h-full w-full bg-transparent backdrop-blur-[2px] "></div>
    <div class=" absolute top-0 inset-x-0">
      <div class=" h-6 w-40 mx-auto rounded-b-3xl bg-black "></div>
    </div>
    <div class="relative">
      <div class=" mt-2 mr-5 flex justify-end space-x-1 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
          <path
            d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
          <path fill-rule="evenodd"
            d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
            clip-rule="evenodd" />
        </svg>
        <svg class=" h-4 w-4 " viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M16 9v6a5 5 0 0 1-10 0v-4l3 3" />
            <circle cx="16" cy="7" r="2" />
            <path d="M16 5V3" />
          </g>
        </svg>
      </div>
      <div class=" h-0.5 w-10 bg-white mr-7 ml-auto mt-1.5 rounded "></div>
      <div class=" mt-2 flex flex-col items-center ">
        <svg class=" h-8 w-8 text-white " viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V10q0-.825.588-1.413Q5.175 8 6 8h1V6q0-2.075 1.463-3.538Q9.925 1 12 1t3.538 1.462Q17 3.925 17 6v2h1q.825 0 1.413.587Q20 9.175 20 10v10q0 .825-.587 1.413Q18.825 22 18 22Zm6-5q.825 0 1.413-.587Q14 15.825 14 15q0-.825-.587-1.413Q12.825 13 12 13q-.825 0-1.412.587Q10 14.175 10 15q0 .825.588 1.413Q11.175 17 12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6Z" />
        </svg>
        <p class=" mt-3 text-white text-5xl font-extralight ">9:41</p>
        <p class=" mt-3 text-white text-lg font-light ">Wednesday, Sept 7th</p>
      </div>
      <div class=" mt-4 mx-2 relative ">
        <!-- notification centre -->
        <div class="ml-4 mb-2 font-semi-bold text-lg ">Notifications</div>
        <div class=" bg-white/50 backdrop-blur-md rounded-3xl py-6 mb-2 ">
          <div class=" flex flex-col items-center mx-4">
            <div class=" w-full grid grid-cols-5 gap-x-4 items-center ">
              <div>
                <svg class=" w-6  text-gray-600 mx-auto " viewBox="0 0 16 16">
                  <g fill="currentColor">
                    <path
                      d="M4 4.85v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Z" />
                    <path
                      d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5a1.5 1.5 0 1 1 0 3a.5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5a1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13ZM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9V4.5Z" />
                  </g>
                </svg>
              </div>
              <div class=" col-span-4 text-gray-600 font-normal ">
                <div>The Array [ ] opening</div>
              </div>
            </div>
          </div>
        </div>
        <div class=" bg-white/50 backdrop-blur-md rounded-3xl py-6  mb-2 ">
          <div class=" flex flex-col items-center mx-4">
            <div class=" w-full grid grid-cols-5 gap-x-4 items-center ">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-auto text-gray-600" fill="none"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <div class=" col-span-4 text-gray-600 font-normal ">
                <div>Stopping by The Vic?</div>
              </div>
            </div>
          </div>
        </div>
        <div class=" bg-white/50 backdrop-blur-md rounded-3xl py-6 ">
          <!-- notification centre -->
          <div class=" flex flex-col items-center mx-4">
            <div class=" w-full grid grid-cols-5 gap-x-4 items-center ">
              <div>
                <svg class=" w-6 h-6 mx-auto text-gray-600 " viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="m5.65 10.025l1.95.825q.35-.7.725-1.35q.375-.65.825-1.3l-1.4-.275ZM9.2 12.1l2.85 2.825q1.05-.4 2.25-1.225q1.2-.825 2.25-1.875q1.75-1.75 2.738-3.887Q20.275 5.8 20.15 4q-1.8-.125-3.95.862q-2.15.988-3.9 2.738q-1.05 1.05-1.875 2.25T9.2 12.1Zm4.45-1.625q-.575-.575-.575-1.413q0-.837.575-1.412t1.425-.575q.85 0 1.425.575q.575.575.575 1.412q0 .838-.575 1.413q-.575.575-1.425.575q-.85 0-1.425-.575Zm.475 8.025l2.1-2.1l-.275-1.4q-.65.45-1.3.812q-.65.363-1.35.713ZM21.95 2.175q.475 3.025-.587 5.887q-1.063 2.863-3.663 5.463L18.2 16q.1.5-.05.975q-.15.475-.5.825l-4.2 4.2l-2.1-4.925L7.075 12.8L2.15 10.7l4.175-4.2q.35-.35.838-.5q.487-.15.987-.05l2.475.5q2.6-2.6 5.45-3.675q2.85-1.075 5.875-.6Zm-18.025 13.8q.875-.875 2.137-.888q1.263-.012 2.138.863t.862 2.137q-.012 1.263-.887 2.138q-.625.625-2.087 1.075q-1.463.45-4.038.8q.35-2.575.8-4.038q.45-1.462 1.075-2.087Zm1.425 1.4q-.25.25-.5.913q-.25.662-.35 1.337q.675-.1 1.338-.337q.662-.238.912-.488q.3-.3.325-.725q.025-.425-.275-.725q-.3-.3-.725-.288q-.425.013-.725.313Z" />
                </svg>
              </div>
              <div class=" col-span-4 text-gray-600 font-normal ">
                <div>Larrakin Game Launch.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>