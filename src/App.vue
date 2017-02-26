<style>
</style>
<template>
  <div id="app">
    <main-nav />
    <router-view></router-view>
    <bottom />
  </div>
</template>
<script>
  import MainNav from 'components/main/navbars/MainNav';
  import Bottom from 'components/main/Bottom';

  export default {
    name: 'app',
    components: {
      MainNav,
      Bottom
    }
  }

</script>