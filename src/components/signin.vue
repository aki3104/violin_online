<template>
  <div>
    <p>Violin Onlineをご利用の方は、Googleアカウントでログインしてください。</p>
    <button @click="login">Googleアカウントでログイン</button>
    <!-- <router-link to="/">新規登録はこちら</router-link> -->
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  name: 'signin',
  data () {
    return {
      userName: '',
      userEmail: '',
      userPass: ''
    }
  },
  methods: {
    ...mapActions(['login'])
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signin{
  margin-top: 20px;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

input {
  margin: 2px 0;
  padding: 10px;
}

label{
  display: inline-block;
  width: 120px;
}

h1{
  font-weight: normal;
}
</style>

