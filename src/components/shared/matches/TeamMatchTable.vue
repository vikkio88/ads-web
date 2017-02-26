<style></style>
<template>
    <div>
        <table v-if="matches.length" class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Day</th>
                    <th>Opponent</th>
                    <th>Country</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="match in matches">
                    <td></td>
                    <td>
                        <router-link :to="{ name: 'round', params: { leagueId: match.round.league_id, roundId: match.league_round_id } }">
                            {{match.date}}
                        </router-link>
                    </td>
                    <td>
                        <router-link :to="{ name: 'team', params: { teamId: match[opponent].id } }">
                            {{match[opponent].name}}
                        </router-link>
                    </td>
                    <td>
                        <flag :iso="match[opponent].nationality" />
                    </td>
                    <td v-if="match.simulated"> {{match.goal_home}} - {{match.goal_away}}</td>
                    <td v-else=""> ? - ?</td>
                </tr>
            </tbody>
        </table>
        <div class="card" v-else>
            <div class="card-block">
                No Matches Yet
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "teamMatchTable",
        props: {
            opponent: { type: String, default: 'away_team' },
            matches: { type: Array, default: () => [] }
        }
    }

</script>