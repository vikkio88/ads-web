<style>
    .navbar-brand span {
        color: white;
    }
</style>
<template>
    <b-navbar toggleable full type="inverse" variant="inverse">
        <b-nav-toggle target="nav_collapse" />
        <router-link class="navbar-brand" to="/">
            <span>AD Simulator</span>
        </router-link>
        <b-collapse isNav id="nav_collapse">
            <b-nav isNavBar>
                <b-nav-item>
                    <router-link to="/leagues">
                        Leagues
                    </router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link to="/teams">
                        Teams
                    </router-link>
                </b-nav-item>
            </b-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
    export default {
        name: 'mainNavBar'
    }

</script>