<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-default">

    <router-link @click="scrollToTop" class="navbar-brand" to="/">
      <img src="../../assets/kiap_white.svg" width="80" height="30" class="d-inline-block align-top" alt="">
      <span class="brand__subtitle">| Kvalitet i almen praksis</span>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars burger__icon"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav right ml-auto">
        <li @click="scrollToTop" class="nav-item" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <router-link class="nav-link" to="/">Forside</router-link>
        </li>
        <li @click="scrollToTop" class="nav-item" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <router-link class="nav-link" to="/icpc">ICPC</router-link>
        </li>
        <li @click="scrollToTop" class="nav-item" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <router-link class="nav-link" to="/om">Om KiAP</router-link>
        </li>
        <li @click="scrollToTop" class="nav-item" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <router-link class="nav-link" to="/support">Support</router-link>
        </li>
        <li @click="scrollToTop" class="nav-item" v-if="this.currentUser == null" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
          <router-link class="nav-link logon__btn" to="/login">Log på</router-link>
        </li>
        <ul class="navbar-nav right" v-else>
          <li class="nav-item" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <router-link class="nav-link" to="/chat">Chat</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="logout" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">Log ud</a>
          </li>
        </ul>
      </ul>
    </div>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'navbar',
    data() {
      return {
        presenceRef: firebase.database().ref('presence')
      }
    },
    computed: {
      ...mapGetters(['currentUser'])
    },
    methods: {
      logout() {
        this.presenceRef.child(this.currentUser.uid).remove()
        firebase.auth().signOut()
        this.$store.dispatch("setUser", null)
        this.$router.push('/')
      },
      scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
  }
</script>

<style scoped>

.navbar {
  padding: .5rem 1rem .5rem 1rem;
  color: white;
  background-color: #2962ff;
  font-weight: 600;
}

.burger__icon {
  color: white;
}

.nav-link {
  color: white;
  font-size: 1.1em;
}

.nav__active {
  border-bottom: 5px solid white;
}

.brand__subtitle {
  padding-left: .5rem;
  color: white;
}

.logon__btn {
    padding: .3rem .8rem;
    color: #2962ff;
    font-weight: 800;
    border-radius: .5rem;
    background-color: white;
    border: none;
}

.dropdown-menu {
  left: unset;
   right: .1rem;
}

:focus {
    outline: none;
}

@media screen and (max-width: 500px) {
  .brand__subtitle {
    display: none;
  }
}

</style>
