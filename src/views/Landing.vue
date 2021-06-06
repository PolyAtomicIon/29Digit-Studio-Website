<template>
  <div>
    <navbar />
    <main>

      <div
        class="relative py-40 flex items-center w-screen h-75-screen"
      >
        <div
          class="absolute top-0 w-full h-full bg-top bg-cover"
          style="
            background-image: url('https://wallpaperaccess.com/full/1092587.jpg');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>

        <div class="container relative mx-auto mt-8">
          <div class="items-center flex justify-between ">
            <div class="w-full md:w-6/12 pl-5 pr-4 text-left">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Try out<br>
                  next gen games!
                </h1>
                <p class="mt-5 py-4 text-sm text-blueGray-100">
                  This is a simple example of a Landing Page you can build using
                  Vue Notus. It features multiple CSS components based on the
                  Tailwind CSS design system.
                </p>
                <button
                  class="bg-emerald-500 text-white flex justify-between align-middle items-center active:bg-emerald-600 text-xs font-bold uppercase px-12 py-2 mt-4 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                >
                  <i class="fas fa-play-circle mr-4 text-2xl"></i> <span> Launch the video </span>
                </button>
              </div>
            </div>

            
          </div>
        </div>
        
        <div
          class="bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-24"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 200"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 200 0 200"
            ></polygon>
          </svg>
        </div>

        <img class="h-75-screen hidden md:block absolute top-3 right-0 lg:right-8" src="@/assets/img/hero_img.png" alt="">

      </div>

      <section class="relative pt-24 pb-16">
        <div class="container mx-auto px-4 ">
          <div class="items-center flex flex-wrap ">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4 ">
              <img
                alt="..."
                class="max-w-full rounded-lg mx-auto "
                :src="logoImg"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4 pt-12">
              <div class="md:pr-12">
                <div
                  class="text-emerald-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-300"
                >
                  <i class="fas fa-map-marker-alt text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">Almaty, Kazakhstan</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  <span class="text-indigo-600 font-semibold">29Digit</span> is Gamedev studio a team of young creative professionals and enthusiasts 
                  that develop games and interactive solutions. 
                </p>
              </div>
            </div>
          </div>

          <div
            class="bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-48 h-500-px"
            style="transform: translateZ(0);"
          >
            <svg
              class="absolute bottom-0 overflow-hidden "
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 700"
              x="0"
              y="0"
            >
              <polygon
                class="text-indigo-600 fill-current"
                points="2560 0 2560 700 -2560 350"
              ></polygon>
            </svg>
          </div>

          <div class="lg:mt-20 mt-16 flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-600"
                  >
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Innovation</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    We spend most of our time researching new ways to build interactive solutions.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-600"
                  >
                    <i class="fas fa-pen-nib"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Education</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Increase the quality of education by developing tools for teachers.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-600"
                  >
                    <i class="fas fa-gamepad"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Entertainment</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    We help to make life more interesting!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="relative bg-white pt-8">

        <div class="container mx-auto ">
         <div class="w-full flex justify-between items-center mb-4 px-4">
            <h2 class="text-3xl font-semibold leading-normal">
              Our projects
            </h2>
            
            <router-view>
                <a href="" class="text-emerald-500 text-lg font-semibold">
                  <i class="fas fa-arrow-right"></i>
                </a>
            </router-view>
          </div>
        </div>

        <div class="w-full container-fluid mx-auto">

          <project-card-list></project-card-list>

          <!-- <div class="w-full flex flex-wrap items-center">

            <div class="overflow-x-auto scrollbar w-full lg:px-10 py-6">

              <ul class="pl-5 flex items-center w-full gap-3">
                <li 
                  v-for="i in 5"
                  :key="i"
                  class="px-1 md:px-2 flex-none">
                  <project-card></project-card>
                </li>
              </ul>
            </div>

          </div> -->

        </div>
      </section>

      <section class="relative pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-6">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Here are our heroes</h2>
              <p class="text-lg leading-relaxed m-4 text-blueGray-500">
                According to the National Oceanic and Atmospheric
                Administration, Ted, Scambos, NSIDClead scentist, puts the
                potentially record maximum.
              </p>
            </div>
          </div>

          <member-card-list></member-card-list>
          
          
        <div
            class="bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-24"
            style="transform: translateZ(0);"
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 200"
              x="0"
              y="0"
            >
              <polygon
                class="text-indigo-600 fill-current"
                points="-2560 -50 2560 200 0 200"
              ></polygon>
            </svg>
        </div>    

        </div>
      </section>

      <section class="pb-20 relative block bg-indigo-600">

        <div class="container mx-auto px-4 lg:pt-24">
          <!-- <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">
                Build something
              </h2>
            </div>
          </div>
          <div class="flex flex-wrap mt-12 justify-center">
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-medal text-xl"></i>
              </div>
              <h6 class="text-xl mt-5 font-semibold text-white">
                Excelent Services
              </h6>
              <p class="mt-2 mb-4 text-blueGray-400">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-poll text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                Grow your market
              </h5>
              <p class="mt-2 mb-4 text-blueGray-400">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                Launch time
              </h5>
              <p class="mt-2 mb-4 text-blueGray-400">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div> -->
        </div>
      </section>

      <section class="relative block py-24 lg:pt-0 bg-indigo-600">
        <div class="container mx-auto px-4">
          
          <div class="flex flex-wrap items-center">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
              >
                <i class="fas fa-user-friends text-xl text-indigo-600"></i>
              </div>
              <h3 class="text-3xl text-white mb-2 font-semibold leading-normal">
                Working with us is a pleasure
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-white"
              >
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-6 text-white"
              >
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </p>
            </div>

            <div class="w-full lg:w-6/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200"
              >
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold">
                    Want to work with us?
                  </h4>
                  <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div class="relative w-full mb-3 mt-8">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Full Name"
                    />
                  </div>

                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                    />
                  </div>
                  <div class="text-center mt-6">
                    <button
                      class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
    <footer-component />
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
import ProjectCardList from '../components/Collections/ProjectCardList.vue';
import MemberCardList from '../components/Collections/MemberCardList.vue';

import patternVue from "@/assets/img/hero_img.png";
import logoImg from "@/assets/img/logo.png";

import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";
import team3 from "@/assets/img/team-3-800x800.jpg";
import team4 from "@/assets/img/team-4-470x470.png";

export default {
  data() {
    return {
      patternVue,
      logoImg,
      team1,
      team2,
      team3,
      team4,
    };
  },
  components: {
    Navbar,
    FooterComponent,
    ProjectCardList,
    MemberCardList
  },
};
</script>

<style scoped>

  .scrollbar::-webkit-scrollbar-track
  {
    /* -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.3);
    background-color: #FFF; */
    border: none;
  }

  .scrollbar::-webkit-scrollbar
  {
    height: 2px;
    width: 10px;
    background-color: #FFF;
  }

  .scrollbar::-webkit-scrollbar-thumb
  {
    /* background-color: #1abc86; */
    background-color: indigo;
    /* border: 2px; */
  }

</style>