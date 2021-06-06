<template>
  <div
    class="relative w-300-px flex flex-col min-w-0 break-words bg-white p-1 mb-6 -xl rounded-lg"
  >
    <div class="">
      <div class="w-full flex flex-wrap justify-center  ">
        <div class="w-full rounded ">
          <div class="flex justify-center text-center ">
            <iframe class="rounded-lg" width="100%" height="200" src="https://www.youtube.com/embed/JbI50w1IsYs?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="flex justify-between pt-2">
              <img :src="team3" class="h-16 w-16 rounded-lg mr-2" alt="">
              <div class=" px-2 py-2 w-full flex flex-col justify-between">
                <h4 class="font-semibold text-md">Lorem ipsum dolor sit amet  </h4>
                <router-view>
                    <a href="" class="text-emerald-500 text-sm font-semibold">
                        Open
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </router-view>
              </div>
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
