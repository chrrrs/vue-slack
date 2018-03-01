<template>
  <div class="login__container">
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui blue image header">
          <div class="content">
            Registrer ny bruger
          </div>
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">

            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="name" placeholder="Navn" v-model="name">
              </div>
            </div>

            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="email" placeholder="E-mail" v-model="email">
              </div>
            </div>

            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="password" name="password" placeholder="Password" v-model="password">
              </div>
            </div>

            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password__confirmation" placeholder="Gentag Password" v-model="password__confirmation">
              </div>
            </div>

            <div class="ui fluid large blue submit button" @click="register">Registrer</div>
          </div>

          <div class="ui error message"></div>

        </form>

        <div class="ui message">
          Allerede bruger? <router-link to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      password__confirmation: ''
    }
  },
  methods: {
    register () {
      console.log('register')
    }
  }
}
</script>

<style scoped>
.login__container {
  margin-top: 40px;
}

.column {
  max-width: 450px;
}
</style>
