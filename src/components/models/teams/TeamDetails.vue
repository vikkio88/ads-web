<style></style>
<template>
    <div>
        {{team}}
    </div>
</template>
<script>
    import TeamsService from '../../../services/ads/TeamsService'

    const service = new TeamsService();
    export default {
        name: 'team-details',
        data() {
            return {
                team: {}
            };
        },
        mounted() {
            service.getOne(this.$route.params.teamId).then(
                (data) => {
                    this.team = data.body.payload;
                },
                (error) => {
                    console.log(error)
                }
            );
        }
    }

</script>