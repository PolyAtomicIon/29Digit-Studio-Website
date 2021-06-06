<template>
    <div class="w-full flex flex-wrap items-center">

        <div class="overflow-x-auto scrollbar w-full lg:px-10 py-6">

            <div class="w-full flex justify-between items-center mb-4 px-6 lg:px-10">
                <h2 class="text-3xl font-semibold leading-normal">
                Our projects
                </h2>
                
                <router-view>
                    <a href="" class="text-emerald-500 text-lg font-semibold">
                    <i class="fas fa-arrow-right"></i>
                    </a>
                </router-view>
            </div>

            <ul class="pl-5 flex items-center w-full gap-3">
                <li 
                    v-for="project in projects"
                    :key="project.id"
                    class="px-1 md:px-2 flex-none">
                    <project-card
                        :title="project.title"
                        :url="project.url"
                        :cover_img="project.cover_url"
                        :video_url="project_videos[project.id]"
                    />
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import ProjectCard from '../Cards/ProjectCard.vue';
    import axios from 'axios'

    export default {
        data () {
            return {
                projects: [],
                project_videos: {
                    "1038207": 'https://www.youtube.com/embed/dPa3AltZ9mA?controls=0',
                    "549617": 'https://www.youtube.com/embed/JbI50w1IsYs?controls=0'
                }
            };
        },
        components: {
            ProjectCard,
        },
        created(){

            axios
            .get("https://itch.io/api/1/nJTo0KqocRwS5FL0j6VT9cCczxOXvEBBVbSMAtzQ/my-games")
            .then(response => {
                this.projects = response.data.games;
                console.log(this.projects)
            });

        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>