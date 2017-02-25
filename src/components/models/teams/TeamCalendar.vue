<style></style>
<template>
    <div>
        <div class="jumbotron">
            <h1>{{team.name}} - Calendar</h1>
            <h2>{{team.nationality}}</h2>
        </div>
        <strong> Home Matches </strong>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="match in team.future_matches_home">
                    <td></td>
                    <td>{{match.away_team.name}} ({{match.away_team.nationality}})</td>
                    <td v-if="match.simulated"> {{match.goal_home}} - {{match.goal_away}}</td>
                    <td v-else=""> ? - ?</td>
                </tr>
            </tbody>
        </table>
        <strong> Away Matches </strong>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="match in team.future_matches_away">
                    <td></td>
                    <td>{{match.home_team.name}} ({{match.home_team.nationality}})</td>
                    <td v-if="match.simulated"> {{match.goal_home}} - {{match.goal_away}}</td>
                    <td v-else=""> ? - ?</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import TeamsService from '../../../services/ads/TeamsService'

    const service = new TeamsService();
    export default {
        name: 'team-calendar',
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