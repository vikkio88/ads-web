<style></style>
<template>
    <div>
        <b-breadcrumb @click="teamInfo" :items="breadcrumbs" />
        <div class="jumbotron">
            <h1>{{team.name}} - Roster</h1>
            <h2>
                <flag :iso="team.nationality" />
            </h2>
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
                players: [],
                breadcrumbs: [
                    { text: 'Team', active: false },
                    { text: 'Roster', active: true }
                ]
            };
        },
        methods: {
            teamInfo(event) {
                this.$router.push({ name: 'team', params: { teamId: this.$route.params.teamId } });
            }
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