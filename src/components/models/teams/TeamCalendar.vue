<style></style>
<template>
    <div>
        <b-breadcrumb @click="teamInfo" :items="breadcrumbs" />
        <div class="jumbotron">
            <h1>{{team.name}} - Calendar</h1>
            <h2>{{team.nationality}}</h2>
        </div>
        <div class="card">
            <h3 class="card-header" @click="togglePlayed">Played Matches</h3>
            <div class="card-block" v-if="!collapsePlayed">
                <div class="card">
                    <div class="card-block">
                        <strong> Home Matches </strong>
                        <team-match-table opponent="away_team" :matches="team.played_matches_home" />
                    </div>
                </div>
                <div class="card">
                    <div class="card-block">
                        <strong> Away Matches </strong>
                        <team-match-table opponent="home_team" :matches="team.played_matches_away" />
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <h3 class="card-header" @click="toggleFuture">Future Matches</h3>
            <div class="card-block" v-if="!collapseFuture">
                <div class="card">
                    <div class="card-block">
                        <strong> Home Matches </strong>
                        <team-match-table opponent="away_team" :matches="team.future_matches_home" />
                    </div>
                </div>
                <div class="card">
                    <div class="card-block">
                        <strong> Away Matches </strong>
                        <team-match-table opponent="home_team" :matches="team.future_matches_away" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import TeamsService from '../../../services/ads/TeamsService'
    import TeamMatchTable from '../../shared/matches/TeamMatchTable'

    const service = new TeamsService();
    export default {
        name: 'team-calendar',
        components: {
            TeamMatchTable
        },
        data() {
            return {
                team: {},
                collapsePlayed: false,
                collapseFuture: false,
                breadcrumbs: [
                    { text: 'Team', active: false },
                    { text: 'Calendar', active: true }
                ]
            };
        },
        mounted() {
            service.getOneWithMatches(this.$route.params.teamId).then(
                (data) => {
                    this.team = data.body.payload;
                },
                (error) => {
                    console.log(error)
                }
            );
        },
        methods: {
            teamInfo(event) {
                this.$router.push({ name: 'team', params: { teamId: this.$route.params.teamId } });
            },
            togglePlayed() {
                this.collapsePlayed = !this.collapsePlayed;
            },
            toggleFuture() {
                this.collapseFuture = !this.collapseFuture;
            },
        }
    }

</script>