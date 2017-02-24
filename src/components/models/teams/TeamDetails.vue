<style></style>
<template>
    <div>
        <div class="jumbotron">
            <h1>{{team.name}}</h1>
            <h2>{{team.nationality}}</h2>
        </div>
        <b-form-fieldset horizontal label="Filter" class="col-6" :label-size="2">
            <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
        </b-form-fieldset>
        <b-table stripped hover :items="team.roster" :fields="fields" :filter="filter">
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
                team: {},
                fields: {
                    placeholder: { label: '#', sortable: false },
                    surname: { label: 'Surname', sortable: true },
                    name: { label: 'Name', sortable: false },
                    nationality: { label: 'Nationality', sortable: false },
                    age: { label: 'Age', sortable: true },
                    role: { label: 'Role', sortable: false },
                    skillAvg: { label: 'Skills', sortable: true },
                    val: { label: 'Value', sortable: false },
                    actions: { label: 'Actions' }
                },
                filter: null
            };
        },
        mounted() {
            service.getOne(this.$route.params.teamId).then(
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