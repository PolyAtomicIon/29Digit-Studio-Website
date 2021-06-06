<template>
    <div class="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3">

        <card-member
            v-for="member in members"
            :key="member.cover_img"
            :name="member.name"
            :surname="member.surname"
            :cover_img="member.cover_img"
            :description="member.description"
            :job_position="member.job_position"
            @open-profile="$router.push({
                name: 'profile',
                params: {
                    'name': member.name,
                    'surname': member.surname,
                    'description': member.description,
                    'job_position': member.job_position,
                    'cover_img': member.cover_img
                }
            }
            )"
        >

        </card-member>
    
    </div>
</template>

<script>
    import CardMember from '../Cards/CardMember.vue';
    // import axios from 'axios'

    export default {
        data () {
            return {
                members: [
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': 'Senior UI/UX designer',
                        "cover_img": './avatars/1.jpg'
                    },
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': 'Project Manager',
                        "cover_img": './avatars/2.jpg'
                    },
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': 'Junior Unity Developer',
                        "cover_img": './avatars/3.jpg'
                    },
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': 'Senior Unity Developer',
                        "cover_img": './avatars/4.jpg'
                    },
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': 'Marketing Manager',
                        "cover_img": './avatars/5.jpg'
                    },
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': 'Pixel artist',
                        "cover_img": './avatars/6.jpg'
                    },
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': '3d Artist & Animator',
                        "cover_img": './avatars/7.jpg'
                    },
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': 'Monetization Manager',
                        "cover_img": './avatars/8.jpg'
                    },
                ],
                
            };
        },
        components: {
            CardMember,
        },
        created(){

            // axios
            // .get("")
            // .then(response => {
            //     this.members = response.data.games;
            //     console.log(this.projects)
            // });

        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>