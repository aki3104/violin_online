<template>
  <div class="signup">
    <img alt="Vue logo" src="../assets/logo.png">
    <Signup msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Signup from '@/components/signup.vue'

export default {
  name: 'signup',
  components: {
    Signup
  }
}
</script>
