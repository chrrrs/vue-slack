<template>
  <div class="sidebar__container">
    <!-- <ConnectedUser></ConnectedUser> -->
    <Channels></Channels>
    <users></users>
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
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #f3f3f3;
    padding-top: 110px;
    z-index: 1;
    -webkit-box-shadow: 2px 0px 10px 0px rgba(186,186,186,0.5);
    -moz-box-shadow: 2px 0px 10px 0px rgba(186,186,186,0.5);
    box-shadow: 2px 0px 10px 0px rgba(186,186,186,0.5);
}

</style>
