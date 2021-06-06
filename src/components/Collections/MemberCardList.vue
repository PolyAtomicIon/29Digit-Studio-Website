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
    import avatar1 from '../../assets/img/avatars/1.jpg'
    import avatar2 from '../../assets/img/avatars/2.jpg'
    import avatar3 from '../../assets/img/avatars/3.jpg'
    import avatar4 from '../../assets/img/avatars/4.jpg'
    import avatar5 from '../../assets/img/avatars/5.jpg'
    import avatar6 from '../../assets/img/avatars/6.jpg'
    import avatar7 from '../../assets/img/avatars/7.jpg'
    import avatar8 from '../../assets/img/avatars/8.jpg'

    export default {
        data () {
            return {
                members: [
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': 'Senior UI/UX designer',
                        "cover_img": avatar1
                    },
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': 'Project Manager',
                        "cover_img": avatar2
                    },
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': 'Junior Unity Developer',
                        "cover_img": avatar3
                    },
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': 'Senior Unity Developer',
                        "cover_img": avatar4
                    },
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': 'Marketing Manager',
                        "cover_img": avatar5
                    },
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': 'Pixel artist',
                        "cover_img": avatar6
                    },
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': '3d Artist & Animator',
                        "cover_img": avatar7
                    },
                    {
                        'name': 'Bekzat',
                        'surname': 'Yernat',
                        'description': 'I am interested in software development, entertainment, and education. Have experience in development of games, web apps, and managing teams.',
                        'job_position': 'Monetization Manager',
                        "cover_img": avatar8
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