<style></style>
<template>
    <div>
        <div class="jumbotron">
            <h1>Leagues</h1>
        </div>
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Teams #</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="league in leagues">
                    <td></td>
                    <td>
                        {{league.name}}
                    </td>
                    <td>{{league.teams}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import LeaguesService from '../../../services/ads/LeaguesService'

    const service = new LeaguesService();
    export default {
        name: 'leagues',
        data() {
            return {
                leagues: []
            };
        },
        mounted() {
            service.getAll().then(
                (data) => {
                    this.leagues = data.body.payload;
                },
                (error) => {
                    console.log(error)
                }
            );
        }
    }

</script>