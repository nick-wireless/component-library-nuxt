<template>
  <!-- setting position of modal  -->
  <div class=" relative z-50 ">
    <!-- backdrop gray -->
    <div  class=" fixed inset-0 overflow-y-auto bg-gray-500 ">
      <!-- setting up the stacking context in the modal  -->
      <div @click.self="closeModal" class=" flex min-h-full items-end justify-center p-4 pb-24 text-center sm:items-center sm:p-0">
        <div class=" relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:p-6 ">
          <div class=" mt-4 h-10 w-10 text-green-600 mx-auto " >
            <slot name="icon">
              <icons-app-contact></icons-app-contact>
            </slot>
          </div>
          <h3 class="mt-3 sm:mt-5 text-lg font-medium leading-6 text-gray-900 text-center ">
            <slot name="heading">
              Let's Connection
            </slot>
          </h3>
          <div class=" mt-6 text-sm text-gray-500  leading-6 ">
            <slot>
              Awesome! Enter your email and submit. <br />We'll reach out shortly.
            </slot>
          </div>
          <div class=" mt-8 ">
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" required=""
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <div class="flex items-center pt-6">
            <input id="terms-accepted" name="terms-accepted" type="checkbox"
              class=" h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 " 
              @input="acceptTerms"
              />
            <label for="terms-accepted" class="ml-3 text-sm font-medium text-gray-700 ">I accept terms & conditions.</label>
          </div>
          <div class=" mt-5 sm:mt-10 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3 ">
            <button @click="closeModal" class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm disabled:opacity-30" :disabled="disabled" >Submit</button>
            <button @click="closeModal" class=" mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm ">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      disabled: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    acceptTerms() {
      this.checked = !this.checked
      if (this.checked) {
        this.disabled = false
      }
      if (!this.checked) {
        this.disabled = true
      }
      console.log(this.checked)
    }
  }
}


</script>

