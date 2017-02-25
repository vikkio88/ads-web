<style></style>
<template>
    <div>
        <b-form-fieldset horizontal label="Filter" class="col-6" :label-size="2">
            <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
        </b-form-fieldset>
        <b-table stripped hover :items="teams" :fields="fields" :filter="filter">
            <template slot="actions" scope="item">
                <b-btn size="sm" variant="secondary" @click="openRoster(item.item.id)">
                    <i class="material-icons">people</i>
                </b-btn>
                <b-btn size="sm" variant="secondary" @click="openCalendar(item.item.id)">
                    <i class="material-icons">insert_invitation</i>
                </b-btn>
            </template>
        </b-table>
    </div>
</template>
<script>
    import TeamsService from '../../../services/ads/TeamsService'

    const service = new TeamsService();
    export default {
        name: 'team-details',
        data() {
            return {
                teams: [],
                fields: {
                    placeholder: { label: '#', sortable: false },
                    name: { label: 'Name', sortable: true },
                    nationality: { label: 'Nationality', sortable: true },
                    actions: { label: 'Actions' }
                },
                filter: null
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
        },
        methods: {
            openRoster(teamId) {
                this.goTo('teamRoster', teamId);
            },
            openCalendar(teamId) { 
                this.goTo('teamCalendar', teamId)
            },
            goTo(route, teamId) {
                this.$router.push({ name: route, params: { teamId } })
            }
        }
    }

</script>