<style>
</style>
<template>
<tr>
    <td></td>
    <td>
        <router-link :to="{ name: 'player', params: { playerId: player.id } }">
            {{player.surname}} {{player.name}}
        </router-link>
    </td>
    <td>
        <flag :iso="player.nationality" />
    </td>
    <td>
        <router-link :to="{ name: 'team', params: { teamId: team.id } }">
            {{team.name}}
        </router-link>
    </td>
    <td v-if="stat == 'goals'">{{player.goals}}</td>
    <td v-if="stat == 'avg'">{{parseFloat(player.avg).toFixed(2)}}</td>
    <td>{{player.appearances}}</td>
</tr>
</template>
<script>
export default {
    name: "playerStatsRow",
    props: {
        player: {type: Object, default: () => {}},
        team: {type: Object, default: () => {}},
        stat: {type: String, default: 'goals'}
    }
}
</script>