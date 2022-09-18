<template>
  <footer class="bg-gray-800" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto  px-4 sm:px-6 lg:py-16 lg:px-8 pb-12 ">
      <section>
        <div class=" bg-gray-100 mt-8 lg:mt-16 py-6 -mx-6 ">
          <achnowledge-country />
        </div>
      </section>

      <div class="py-12 xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-base font-medium text-white">About</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.about" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-base font-medium text-white">Products</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.products" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-base font-medium text-white">Resources</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.resources" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-base font-medium text-white">Platform</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.platform" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-8 xl:mt-0">
          <h3 class="text-base font-medium text-white">Subscribe to our newsletter</h3>
          <p class="mt-4 text-base text-gray-300">The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form class="mt-4 sm:flex sm:max-w-md">
            <label for="email-address" class="sr-only">Email address</label>
            <input type="email" name="email-address" id="email-address" autocomplete="email" required=""
              class="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Enter your email" />
            <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button type="submit"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <p class="pt-8 text-base text-gray-400 md:order-1 md:mt-0">&copy; 2022 The Array, Inc. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>

const navigation = {
  about: [
    { name: 'Company', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  products: [
    { name: 'Rentals', href: '#' },
    { name: 'Courses', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Talent', href: '#' },
  ],
  resources: [
    { name: 'Login', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Newsletter', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  platform: [
    { name: 'Licences', href: '#' },
    { name: 'Terms & Condition', href: '#' },
    { name: 'Legal', href: '#' },
  ],
}

</script>