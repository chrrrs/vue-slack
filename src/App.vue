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
    }
  }
</script>

<style>
* {
  font-family: 'Roboto', sans-serif;
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

.modal-open {
  padding-right: 0; 
}

</style>
