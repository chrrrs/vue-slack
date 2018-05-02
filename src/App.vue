<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <costume-footer></costume-footer>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar';
import CostumeFooter from './components/footer/CostumeFooter'

  export default {
    name: 'app',
    components: {
      Navbar, CostumeFooter
    },
  }
</script>

<style>
* {
  font-family: 'Roboto', sans-serif;
}

</style>
