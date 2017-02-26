<style></style>
<template>
    <div>
        <div class="jumbotron">
            <h1>
                <router-link :to="{ name: 'league', params: { leagueId: round.league.id } }">
                    {{round.league.name}}
                </router-link>
                - Matchday {{round.day}}
            </h1>
        </div>

        <pre>{{round.matches}}</pre>
    </div>
</template>
<script>
    import LeaguesService from '../../../services/ads/LeaguesService'

    const service = new LeaguesService();
    export default {
        name: 'round',
        data() {
            return {
                round: {}
            };
        },
        mounted() {
            service.getOneRound(this.$route.params.leagueId, this.$route.params.roundId).then(
                (data) => {
                    this.round = data.body.payload;
                },
                (error) => {
                    console.log(error)
                }
            );
        }
    }

</script>