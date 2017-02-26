<style></style>
<template>
    <div>
        <table v-if="players.length" class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Nationality</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th>Skills</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="player in players">
                    <td></td>
                    <td>
                        <router-link :to="{ name: 'player', params: { playerId: player.id } }">
                            {{player.surname}} {{player.name}}
                        </router-link>
                    </td>
                    <td>
                        <flag :iso="player.nationality" />
                    </td>
                    <td>{{player.age}}</td>
                    <td>{{player.role}}</td>
                    <td>{{player.skillAvg}}</td>
                    <td>{{player.val}}m €</td>
                </tr>
            </tbody>
        </table>
        <div class="card" v-else>
            <div class="card-block">
                No Players ...
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "singleTeam",
        props: {
            players: { type: Array, default: () => [] }
        }
    }

</script>