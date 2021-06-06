<template>
  <div class="w-full mx-auto md:w-6/12 mb-8">
    <div class="relative w-full">
      
      <img
        alt="..."
        :src="img"
        class="main-item shadow-lg rounded-full mx-auto max-w-120-px"
      />
      
      <div class="bg-white rounded-lg shadow-2xl absolute w-28 max-w-screen p-4 text-center hide">
        <h5 class="text-xl font-bold"> {{ NameAndSurname }} </h5>
        <p
          class=" text-sm text-blueGray-400 uppercase font-semibold"
        >
          {{ jobPosition }}
        </p>

        <hr class="my-4">

        <p class="text-sm pb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, magni consectetur. Cum nam dicta fuga ex voluptatibus eius ratione quibusdam tempore aperiam. Odio, minima! Esse ut sed recusandae adipisci culpa?
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
    img: {
      default: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
    },
    name: {
      default: 'lorem'
    },
    surname: {
      default: 'ipsum'
    },
    jobPosition: {
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
