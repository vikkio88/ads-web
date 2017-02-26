<style></style>
<template>
    <div>
        <div class="jumbotron">
            <h1>{{league.name}}</h1>
        </div>
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Matchdays</th>
                    <th>Played</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="round in league.rounds">
                    <td></td>
                    <td>
                        <router-link :to="{ name: 'round', params: { leagueId: league.id, roundId: round.id } }">
                            Round {{round.day}}
                        </router-link>
                    </td>
                    <td>
                        <i class="material-icons" v-if="round.simulated">done</i>
                        <i class="material-icons" v-else>clear</i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import LeaguesService from '../../../services/ads/LeaguesService'

    const service = new LeaguesService();
    export default {
        name: 'league',
        data() {
            return {
                league: {}
            };
        },
        mounted() {
            service.getOne(this.$route.params.leagueId).then(
                (data) => {
                    this.league = data.body.payload;
                },
                (error) => {
                    console.log(error)
                }
            );
        }
    }

</script>