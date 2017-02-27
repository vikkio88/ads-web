<style></style>
<template>
    <div>
        <table v-if="matches.length" class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Day</th>
                    <th></th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="match in matches">
                    <td></td>
                    <td>{{match.date}}</td>
                    <td>
                        <flag :iso="match.home_team.nationality" />
                        <router-link :to="{ name: 'team', params: { teamId: match.home_team.id } }">
                            {{match.home_team.name}}
                        </router-link>

                        -
                        <router-link :to="{ name: 'team', params: { teamId: match.away_team.id } }">
                            {{match.away_team.name}}
                        </router-link>
                        <flag :iso="match.away_team.nationality" />
                    </td>
                    <td>
                        <router-link :to="{ name: 'match', params: { matchId: match.id } }">
                            <span v-if="match.simulated">
                                {{match.goal_home}} - {{match.goal_away}}
                            </span>
                            <span v-else>
                                ? - ?
                            </span>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        name: "matches",
        props: {
            matches: { type: Array, default: () => [] }
        }
    }

</script>