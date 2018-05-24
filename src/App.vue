<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <div v-if="this.$route.name != 'Chat'">
      <costume-footer></costume-footer>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar';
import CostumeFooter from './components/footer/CostumeFooter'

  export default {
    name: 'app',
    components: {
      Navbar, CostumeFooter
    }
  }
</script>

<style>
* {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}

a {
  color: #212529;
}

a:hover {
    color: #212529;
  }

.modal-backdrop {
  display: none;
}

</style>
