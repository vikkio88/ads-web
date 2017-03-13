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
    <td>{{player.appearances}}</td>
    <td>{{player.goals}}</td>
    <td>{{parseFloat(player.avg).toFixed(2)}}</td>
</tr>
</template>
<script>
export default {
    name: "playerStatsRow",
    props: {
        player: {type: Object, default: () => {}},
        team: {type: Object, default: () => {}}
    }
}
</script>