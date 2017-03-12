<style></style>
<template>
<div>
<pre>
{{stats}}
</pre>
</div>
</template>
<script>
    import StatsService from '../../../services/ads/StatsService'

    const service = new StatsService();
    export default {
        name: "mainStats",
        data(){
            return {
                stats: {}
            };
        },
        mounted (){
            service.getMain().then(
                (data) => {
                    this.stats = data.body.payload;
                },
                (error) => {
                    console.log(error)
                }
            );
        }
    }
</script>