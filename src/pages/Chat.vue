<template>
  <div class="chat__container">
    <div class="btn-group">
      <button class="btn mobile__sidebar__btn" @click.prevent="openSidebar"><i class="fas fa-angle-right"></i></button>
    </div>
    <sidebar class="sidebar"></sidebar>
    <messages></messages>
  </div>
</template>

<script>

  import Sidebar from '../components/sidebar/Sidebar'
  import Messages from '../components/messages/Messages'

  export default {
    name: 'chat',
    components: { Sidebar, Messages },
    methods: {
      openSidebar() {
        $('.sidebar').show()
      }
    }
  }
</script>

<style scoped>

  .chat__container {
    height: 100%;
  }

  .mobile__sidebar__btn {
    display: none;
  }

  .sidebar {
    width: 300px;
    display: flex;
  }

  @media screen and (max-width: 991px) {
    .mobile__sidebar__btn {
      display: block;
      position: fixed;
      top: 100px;
      left: 0;
      z-index: 1;
      padding: 0.5rem 2rem;
      border-radius: 0 1rem 1rem 0;
      border: none;
      background-color: #2962ff;
      -webkit-box-shadow: 4px 0px 12px 0px rgba(0,0,0,0.25);
      -moz-box-shadow: 4px 0px 12px 0px rgba(0,0,0,0.25);
      box-shadow: 4px 0px 12px 0px rgba(0,0,0,0.25);
    }

    .fa-angle-right {
      margin-left: .5rem;
      margin-right: -.7rem;
      color: white;
    }

    .sidebar {
      width: 100%;
      display: none;
    }
  }

  @media screen and (max-height: 590px) {
    .mobile__sidebar__btn {
      display: block;
      position: fixed;
      top: 100px;
      left: 0;
      z-index: 1;
      padding: 0.5rem 2rem;
      border-radius: 0 1rem 1rem 0;
      border: none;
      background-color: #2962ff;
      -webkit-box-shadow: 4px 0px 12px 0px rgba(0,0,0,0.25);
      -moz-box-shadow: 4px 0px 12px 0px rgba(0,0,0,0.25);
      box-shadow: 4px 0px 12px 0px rgba(0,0,0,0.25);
    }

    .fa-angle-right {
      margin-left: .5rem;
      margin-right: -.7rem;
      color: white;
    }

    .sidebar {
      width: 100%;
      display: none;
    }
  }
</style>
