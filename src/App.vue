<style>
</style>
<template>
  <div id="app">
    <main-nav />
    <router-view></router-view>
  </div>
</template>
<script>
  import MainNav from 'components/navbars/mainNav';

  export default {
    name: 'app',
    components: {
      MainNav
    }
  }

</script>