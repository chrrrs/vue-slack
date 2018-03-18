<template>
  <div class="sidebar__container">
    <h1 class="ui inverted center aligned header">PKAP CHAT</h1>
    <ConnectedUser></ConnectedUser>
    <Channels></Channels>
    <div class="ui divider">
      <users></users>
    </div>

  </div>
</template>

<script>

  import ConnectedUser from './ConnectedUser';
  import Channels from './Channels';
  import Users from './Users';

  export default {
    name: 'Sidebar',
    components: { ConnectedUser, Channels, Users },
  }

</script>

<style scoped>

  .sidebar__container{
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    width: 300px;
    padding: 10px;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #E6EBF1;
    padding-top: 110px;
}

</style>
