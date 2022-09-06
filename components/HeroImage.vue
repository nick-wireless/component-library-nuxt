 <template>
  <div class=" relative flex justify-center h-96 overflow-hidden ">
    <artboard-hero-image class=" absolute "></artboard-hero-image>
    <artboard-sun-and-clouds class=" absolute -left-32 "></artboard-sun-and-clouds>
    <div class=" absolute bottom-0 w-full ">
      <img class=" w-full " src="@/assets/svgs/TriangleClipLarge.svg" />
    </div>
    <slot></slot>
  </div>
</template>

<style>
</style>
