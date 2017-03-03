<style></style>
<template>
    <table class="table table-striped table-hover">
        <tbody>
            <tr v-for="scorer in scorers">
                <td></td>
                <td>
                    <router-link :to="{ name: 'player', params: { playerId: scorer.id } }">
                        {{scorer.surname}} {{scorer.name}}
                    </router-link>
                    <span v-if="scorer.pivot.goals > 1"> (x{{scorer.pivot.goals}})</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    export default {
        name: "scorersTable",
        props: {
            scorers: { type: Array, default: () => [] }
        }
    }

</script>