<style></style>
<template>
    <b-button-group v-if="teamId" size="sm">
        <b-button variant="secondary" @click="openRoster(teamId)">
            <i class="material-icons">group</i>
        </b-button>
        <b-button variant="secondary" @click="openCalendar(teamId)">
            <i class="material-icons">insert_invitation</i>
        </b-button>
    </b-button-group>
</template>
<script>
    export default {
        name: "teamViewActions",
        props: {
            teamId: { type: Number, default: null }
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