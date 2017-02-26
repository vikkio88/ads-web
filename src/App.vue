<style scoped>
  div.container {
    margin-bottom: 30px;
  }
</style>
<template>
  <div id="app">
    <main-nav />
    <div class="container">
      <router-view></router-view>
    </div>
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