<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Signin from '@/components/signin.vue'

export default {
  name: 'about',
  components: {
    Signin
  }
}
</script>
