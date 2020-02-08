<template>
  <div class="signin">
    <h1>Violin Online ログイン</h1>
    <Signin/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Signin from '@/components/signin.vue'

export default {
  name: 'signin',
  components: {
    Signin
  }
}
</script>
