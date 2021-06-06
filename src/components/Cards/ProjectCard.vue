<template>
  <div
    class="relative w-300-px flex flex-col min-w-0 break-words bg-white mb-6 shadow-xl rounded-lg mt-16"
  >
    <div class="">
      <div class="w-full flex flex-wrap justify-center">
          
        <div class="w-full px-4 ">
          <div class="relative">
            <img
              alt="..."
              :src="team3"
              class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 max-w-150-px"
            />
          </div>
          
          <div class="ml-auto w-10/12 px-6 py-3">
              <h4 class="font-semibold inline px-4 text-lg">Lorem ipsum dolor sit amet  </h4>
              <router-view>
                  <a href="" class="text-emerald font-semibold">
                      <i class="fas fa-external-link-alt"></i>
                  </a>
              </router-view>
          </div>
        </div>
        <div class="w-full mt-2 rounded bg-red-400">
          <div class="flex justify-center text-center pt-8 pb-2 px-4">

            <iframe class="rounded-lg" width="560" height="245" src="https://www.youtube.com/embed/JbI50w1IsYs?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import team3 from "@/assets/img/team-3-800x800.jpg";

export default {
  data() {
    return {
      team3,
    };
  },
};
</script>
