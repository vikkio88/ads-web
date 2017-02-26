<style></style>
<template>
    <div>
        <table v-if="teams.length" class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Actions</th>
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
                        <team-view-actions :team-id="team.id"/>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="card" v-else>
            <div class="card-block">
                No Teams ...
            </div>
        </div>
    </div>
</template>
<script>
    import TeamViewActions from './TeamViewActions';
    export default {
        name: "teamsTable",
        components: {
            TeamViewActions
        },
        props: {
            teams: { type: Array, default: () => [] }
        }
    }

</script>