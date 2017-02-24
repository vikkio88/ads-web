<style>
    .navbar-brand span{
        color: white;
    }
</style>
<template>
    <b-navbar toggleable full type="inverse" variant="inverse">
        <b-nav-toggle target="nav_collapse" />
        <a class="navbar-brand" to="/">
            <span>AD Simulator</span>
        </a>
        <b-collapse isNav id="nav_collapse">
            <b-nav isNavBar>
                <b-nav-item>Support</b-nav-item>
                <b-nav-item>Docs</b-nav-item>
                <b-nav-item>Contact Us</b-nav-item>
            </b-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
    export default {
        name: 'mainNavBar'
    }

</script>