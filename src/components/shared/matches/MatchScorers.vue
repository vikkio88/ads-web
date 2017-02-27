<style></style>
<template>
    <div class="row">
        <div class="col">
            <scorers-table :scorers="homeScorers" />
        </div>
        <div class="col">
            <scorers-table :scorers="awayScorers" />
        </div>
    </div>
</template>
<script>
    import ScorersTable from './ScorersTable'

    export default {
        name: "matchScorers",
        components: {
            ScorersTable
        },
        computed:{
            homeScorers(){
                return this.scorers.filter(this.belongsToHome);
            },
            awayScorers(){
                return this.scorers.filter(this.belongsToAway);
            }
        },
        props: {
            scorers: { type: Array, default: () => [] },
            home: { type: Object, default: () => { } },
            away: { type: Object, default: () => { } }
        },
        methods:{
            belongsToHome(scorer){
                return scorer.team_id == this.home.id;
            },
            belongsToAway(scorer){
                return scorer.team_id == this.away.id;
            }
        }
    }

</script>