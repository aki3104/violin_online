<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">新規登録</router-link> |
      <router-link to="/signin">ログイン</router-link>
    </div>
    <button v-if='$store.state.login_user' @click='logout'>ログアウト</button>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
    created () {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      if (user) {
        this.setLoginUser(user)

      }
    })
  },
   data: () => ({
    //
  }),
  methods: {
    ...mapActions(['setLoginUser', 'logout'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
