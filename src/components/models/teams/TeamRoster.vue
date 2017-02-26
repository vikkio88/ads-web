<style></style>
<template>
    <div>
        <div class="jumbotron">
            <h1>{{team.name}} - Roster</h1>
            <h2>{{team.nationality}}</h2>
        </div>
        <players-table :players="team.roster" />
    </div>
</template>
<script>
    import TeamsService from '../../../services/ads/TeamsService'
    import PlayersTable from '../../shared/players/PlayersTable'


    const service = new TeamsService();
    export default {
        name: 'team-roster',
        components: {
            PlayersTable
        },
        data() {
            return {
                team: {},
                players: []
            };
        },
        mounted() {
            service.getOneWithRoster(this.$route.params.teamId).then(
                (data) => {
                    this.team = data.body.payload;
                },
                (error) => {
                    console.log(error)
                }
            );
        }
    }

</script>