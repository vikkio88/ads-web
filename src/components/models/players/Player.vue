<style scoped>
    td:first-child {
        font-weight: bold;
    }
</style>
<template>
    <div>
        <div class="jumbotron">
            <h1>{{player.surname}} {{player.name}} <flag :iso="player.nationality" /></h1>
            <router-link :to="{name:'teamRoster', params:{teamId:team.id}}">
                <h3>{{team.name}} <flag :iso="team.nationality" /></h3>
            </router-link>
        </div>

        <div class="card">
            <h3 class="card-header">Info</h3>
            <div class="card-block">
                <div class="card">
                    <div class="card-block">
                        <table class="table table-hover">
                            <tbody>
                                <tr>
                                    <td>Role</td>
                                    <td>{{player.role}}</td>
                                </tr>
                                <tr>
                                    <td>Skills</td>
                                    <td>{{player.skillAvg}}</td>
                                </tr>
                                <tr>
                                    <td>Value</td>
                                    <td>{{player.val}}m €</td>
                                </tr>
                                <tr>
                                    <td>Wage</td>
                                    <td>{{player.wageReq}}m €/year</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <h3 class="card-header">Statistics</h3>
            <div class="card-block">
                <div class="card">
                    <div class="card-block">
                        <table class="table table-hover">
                            <tbody>
                                <tr>
                                    <td>Avg</td>
                                    <td v-if="player.avg">{{player.avg.avg}}</td>
                                    <td v-else>-</td>
                                </tr>
                                <tr>
                                    <td>Appearances</td>
                                    <td v-if="player.avg">{{player.appearances.count}}</td>
                                    <td v-else>-</td>
                                </tr>
                                <tr>
                                    <td>Goals</td>
                                    <td v-if="player.avg">{{player.goals.count}}</td>
                                    <td v-else>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import PlayersService from '../../../services/ads/PlayersService'


    const service = new PlayersService();
    export default {
        name: "player",
        data() {
            return {
                player: {},
                team: {}
            };
        },
        mounted() {
            service.getOne(this.$route.params.playerId).then(
                (data) => {
                    this.player = data.body.payload;
                    this.team = this.player.team;
                },
                (error) => {
                    console.log(error)
                }
            );
        }
    }

</script>