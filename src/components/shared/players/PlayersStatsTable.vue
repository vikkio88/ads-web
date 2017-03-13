<style>
</style>
<template>
<div>
        <table v-if="players.length" class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Nationality</th>
                    <th>Team</th>
                    <th v-if="stat == 'goals'">Goals</th>
                    <th v-if="stat == 'avg'">Avg</th>
                    <th>Appearances</th>
                </tr>
            </thead>
            <tbody>
                <player-stats-row :player="player" :team="player.team" v-for="player in players" :stat="stat"/>
            </tbody>
        </table>
        <div class="card" v-else>
            <div class="card-block">
                No Players ...
            </div>
        </div>
    </div>
</template>
<script>
import PlayerStatsRow from './PlayerStatsRow'

export default {
    name: "playersStatsTable",
    components:{
        PlayerStatsRow
    },
    props: {
        players: {type: Array, default: () => []},
        stat: {type: String, default: 'goals'}
    }
}
</script>