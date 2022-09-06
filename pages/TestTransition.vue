<template>
  <Transition name="bounce">
    <p style="text-align: center;">
      Hello here is some bouncy text!
    </p>
  </Transition>
</template>


<script setup>
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 2s;
}

.bounce-leave-active {
  animation: bounce-in 2s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>