<template>
  <div class="w-full mx-auto md:w-6/12 mb-8">
    <div class="relative w-full" @click="$router.push('/profile')">
      
      <img
        alt="..."
        :src="cover_img"
        class="main-item object-cover shadow-lg rounded-full mx-auto w-120-px h-120-px"
      />
      
      <!-- <div 
        class="main-item rounded-lg max-w-120 mx-auto"
        :style=" 'background-img:' + cover_img +  "
      >

      </div> -->

      <div class="bg-white rounded-lg shadow-2xl absolute w-28 max-w-screen p-4 text-center hide">
        <h5 class="text-xl font-bold"> {{ NameAndSurname }} </h5>
        <p
          class=" text-sm text-blueGray-400 uppercase font-semibold"
        >
          {{ job_position }}
        </p>

        <hr class="my-4">

        <p class="text-sm pb-20">
          {{ description }}
        </p>

        <!-- <div class="mt-6">
          <button
            class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            <i class="fab fa-dribbble"></i>
          </button>
          <button
            class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            <i class="fab fa-google"></i>
          </button>
          <button
            class="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            <i class="fab fa-twitter"></i>
          </button>
          <button
            class="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            <i class="fab fa-instagram"></i>
          </button>
        </div> -->
      </div>

    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
    };
  },
  props: {
    cover_img: {
      default: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
    },
    name: {
      default: 'lorem'
    },
    surname: {
      default: 'ipsum'
    },
    description: {
      default: 'lorem ipsum dolor sit amet'
    },
    job_position: {
      default: 'lorem ipsum'
    } 
  },
  computed: {
    NameAndSurname(){
      return this.name + ' ' + this.surname;
    }
  }
};
</script>

<style scoped>
  .hide {
    position: absolute;
    display: none;
    top: -50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, -50%);
  }

  .main-item {
    z-index: 2;
  }

  .main-item:hover {
    position: relative;
    z-index: 2;
  }

  .main-item:hover + .hide {
    display: block;
    z-index: 1;

  }
</style>
