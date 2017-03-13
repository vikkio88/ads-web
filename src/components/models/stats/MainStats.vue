<style></style>
<template>
<div>
    <players-stats-table :players="stats.players" />
<pre>
{{stats}}
</pre>
</div>
</template>
<script>
    import StatsService from '../../../services/ads/StatsService'
    import PlayersStatsTable from '../../shared/players/PlayersStatsTable'

    const service = new StatsService();
    export default {
        name: "mainStats",
        components:{
            PlayersStatsTable
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