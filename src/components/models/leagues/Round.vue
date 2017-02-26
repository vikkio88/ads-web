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
        <matches-table :matches="round.matches" />
    </div>
</template>
<script>
    import LeaguesService from '../../../services/ads/LeaguesService'
    import MatchesTable from '../../shared/matches/MatchesTable'

    const service = new LeaguesService();
    export default {
        name: 'round',
        data() {
            return {
                round: {}
            };
        },
        components: {
            MatchesTable
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