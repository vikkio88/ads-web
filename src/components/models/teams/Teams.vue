<style></style>
<template>
    <div>
        <div class="jumbotron">
            <h1>Teams</h1>
        </div>
        <teams-table :teams="teams" />
    </div>
</template>
<script>
    import TeamsService from '../../../services/ads/TeamsService'
    import TeamsTable from '../../shared/teams/TeamsTable'

    const service = new TeamsService();
    export default {
        name: 'team-details',
        components: {
            TeamsTable
        },
        data() {
            return {
                teams: []
            };
        },
        mounted() {
            service.getAll().then(
                (data) => {
                    this.teams = data.body.payload;
                },
                (error) => {
                    console.log(error)
                }
            );
        }
    }

</script>