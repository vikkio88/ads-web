<style>
</style>
<template>
    <div>
        <table v-if="teams.length" class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>Nationality</th>
                    <th>Won</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="team in teams">
                    <td></td>
                    <td>
                        <router-link :to="{ name: 'team', params: { teamId: team.id } }">
                            {{team.name}}
                        </router-link>
                    </td>
                    <td>
                        <flag :iso="team.nationality" />
                    </td>
                    <td>
                        {{team.won}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "teamsStatsTable",
    props: {
        teams: {type: Array, default: () => []},
    }
}
</script>