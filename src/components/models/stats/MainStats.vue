<style></style>
<template>
<div>
    <div class="jumbotron">
            <h1>Statistics</h1>
    </div>
    <div class="card">
        <h3 class="card-header">Scorers Table</h3>
        <div class="card-block">
            <players-stats-table :players="stats.scorers" stat="goals"/>
        </div>
    </div>

    <div class="card">
        <h3 class="card-header">Best Performances</h3>
        <div class="card-block">
            <players-stats-table :players="stats.avg" stat="avg"/>
        </div>
    </div>

    <div class="card">
        <h3 class="card-header">Best Teams</h3>
        <div class="card-block">
            <teams-stats-table :teams="stats.teams" />
        </div>
    </div>
</div>
</template>
<script>
    import StatsService from '../../../services/ads/StatsService'
    import PlayersStatsTable from '../../shared/players/PlayersStatsTable'
    import TeamsStatsTable from '../../shared/teams/TeamsStatsTable'

    const service = new StatsService();
    export default {
        name: "mainStats",
        components:{
            PlayersStatsTable,
            TeamsStatsTable
        },
        data(){
            return {
                stats: {}
            };
        },
        mounted (){
            service.getMain().then(
                (data) => {
                    this.stats = data.body.payload;
                },
                (error) => {
                    console.log(error)
                }
            );
        }
    }
</script>