<style></style>
<template>
    <b-navbar toggleable full>
        <b-nav-toggle target="nav_collapse" />
        <a class="navbar-brand" to="/">
            <span>Bootstrap4</span>
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