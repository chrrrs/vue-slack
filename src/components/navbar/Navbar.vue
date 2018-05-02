<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-default">

    <router-link class="navbar-brand" to="/">
      <img src="../../assets/pkap_logo.png" width="80" height="30" class="d-inline-block align-top" alt="">
      <span class="brand__subtitle">| Kvalitet i almen praksis</span>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars burger__icon"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav right ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Forside</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Håndbogen</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/icpc">ICPC</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">DANPEP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Akkreditering</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Om KiAP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Support</a>
        </li>
        <li class="nav-item" v-if="this.currentUser == null"> 
          <router-link class="nav-link logon__btn" to="/login">Log på</router-link>
        </li>
        <ul class="navbar-nav right" v-else>
          <li class="nav-item">
            <a class="nav-link" href="#">Filer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Chat</a>
          </li>
          <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" @click="logout">Log ud</a>
        </div>
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
      }
    }
  }
</script>

<style scoped>

.navbar {
  padding: .5rem 1rem 0 1rem;
  color: white;
  background-color: #4A33E8;
  font-weight: 600;
}

.burger__icon {
  color: white;
}

.nav-link {
  color: white;
}

.nav__active {
  border-bottom: 5px solid white;
}

.brand__subtitle {
  padding-left: .5rem;
  color: white;
}

.logon__btn {
    padding: .5rem 1rem;
    color: #4A33E8;
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
