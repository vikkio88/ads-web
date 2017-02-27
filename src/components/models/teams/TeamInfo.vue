<style></style>
<template>
    <div>
        <b-breadcrumb :items="breadcrumbs" />
        <div class="jumbotron">
            <h1>{{team.name}}</h1>
            <h2>
                <flag :iso="team.nationality" />
            </h2>
            <team-view-actions :team-id="team.id" />
        </div>
        <div class="card">
            <h3 class="card-header"> Coach </h3>
            <div class="card-block">
                <table class="table table-hover">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td> {{coach.name}} {{coach.surname}}</td>
                        </tr>
                        <tr>
                            <td>Nationality</td>
                            <td>
                                <flag :iso="coach.nationality" />
                            </td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{{coach.age}}</td>
                        </tr>
                        <tr>
                            <td>Skills</td>
                            <td>{{coach.skillAvg}}</td>
                        </tr>
                        <tr>
                            <td>Favourite Module</td>
                            <td>{{coach.favouriteModule}}</td>
                        </tr>
                        <tr>
                            <td>Wage</td>
                            <td>{{coach.wageReq}}m €/year</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import TeamsService from '../../../services/ads/TeamsService'
    import TeamViewActions from '../../shared/teams/TeamViewActions'

    const service = new TeamsService();
    export default {
        name: 'teamInfo',
        data() {
            return {
                team: {},
                coach: {},
                breadcrumbs: [
                    { text: 'Team', link: './', active: true }
                ]
            };
        },
        components: {
            TeamViewActions
        },
        mounted() {
            service.getOne(this.$route.params.teamId).then(
                (data) => {
                    this.team = data.body.payload;
                    this.coach = this.team.coach;
                },
                (error) => {
                    console.log(error)
                }
            );
        }
    }

</script>