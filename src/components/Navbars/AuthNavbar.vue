<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between mt-8 px-2 py-3 navbar-expand-lg "
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-star"
      >
        <router-link
          class="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
          to="/"
        >
          29Digit Studio
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"
        :class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="hidden lg:flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center ml-3 pl-4 border-blueGray-500 border-l">
            <span class="text-gray-500">Entertainment</span>
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#projects"
            >
              <!-- <i
                class="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg"
              /> -->
              <span class=" inline-block ml-2">Games</span>
            </a>
          </li>

          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#about"
            >
              <!-- <i
                class="lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg"
              /> -->
              <span class="inline-block ml-2">About</span>
            </a>
          </li>

          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#members"
            >
              <!-- <i
                class="lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg"
              /> -->
              <span class="inline-block ml-2">Careers</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
  },
};
</script>
