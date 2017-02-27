<style></style>
<template>
    <div>
        <div class="jumbotron">
            <h4>
                <router-link :to="{ name: 'league', params: { leagueId: league.id } }">
                    {{league.name}}
                </router-link>
                -
                <router-link :to="{ name: 'round', params: { leagueId: league.id, roundId: round.id } }">
                    Round {{round.day}}
                </router-link>
            </h4>
            <h5><small>{{match.date}}</small></h5>
            <h1 class="display-5">
                <small><flag :iso="homeTeam.nationality" /></small>
                <router-link :to="{ name: 'team', params: { teamId: homeTeam.id } }">
                    {{homeTeam.name}}
                </router-link>
                {{result}}
                <router-link :to="{ name: 'team', params: { teamId: awayTeam.id } }">
                    {{awayTeam.name}}
                </router-link>
                <small><flag :iso="awayTeam.nationality" /></small>
            </h1>
        </div>
        <match-scorers :home="homeTeam" :away="awayTeam" :scorers="scorers" />
    </div>
</template>
<script>
    import MatchesServices from '../../../services/ads/MatchesServices'
    import MatchScorers from '../../shared/matches/MatchScorers'

    const service = new MatchesServices();
    export default {
        name: 'league',
        components: {
            MatchScorers
        },
        data() {
            return {
                match: {},
                homeTeam: {},
                awayTeam: {},
                round: {},
                league: {},
                scorers: [],
            };
        },
        computed: {
            result() {
                let goalHome = '?';
                let goalAway = '?';
                if (this.match.simulated) {
                    goalHome = this.match.goal_home;
                    goalAway = this.match.goal_away;
                }
                return `${goalHome} - ${goalAway}`;
            }
        },
        mounted() {
            service.getOne(this.$route.params.matchId).then(
                (data) => {
                    this.match = data.body.payload;
                    this.homeTeam = this.match.home_team;
                    this.awayTeam = this.match.away_team;
                    this.round = this.match.round;
                    this.league = this.round.league;
                    this.scorers = this.match.scorers;
                },
                (error) => {
                    console.log(error)
                }
            );
        }
    }

</script>