<template>
  <div class="chat__container">
    <sidebar></sidebar>
    <messages></messages>
  </div>
</template>

<script>

  import Sidebar from '../components/sidebar/Sidebar'
  import Messages from '../components/messages/Messages'

  export default {
    name: 'chat',
    components: { Sidebar, Messages }
  }
</script>

<style scoped>

  .chat__container {
    height: 100%;
  }

</style>
