<style></style>
<template>
    <div>
        <div class="jumbotron">
            <h4>2017-06-24</h4>
            <h1>Team A 0 - 0 Team B</h1>
            <h2>League - Round 1</h2>
        </div>
        <pre>
            {{scorers}}
        </pre>
    </div>
</template>
<script>
    import MatchesServices from '../../../services/ads/MatchesServices'

    const service = new MatchesServices();
    export default {
        name: 'league',
        data() {
            return {
                round: {},
                league: {},
                scorers: [],
            };
        },
        mounted() {
            service.getOne(this.$route.params.matchId).then(
                (data) => {
                    this.league = data.body.payload;
                },
                (error) => {
                    console.log(error)
                }
            );
        }
    }

</script>