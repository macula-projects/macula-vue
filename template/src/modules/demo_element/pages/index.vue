<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/HelloWorld">HelloWorld</router-link>
  </div>
</template>

<routeMeta>
  {
    title: '首页',
    layout: 'layout-admin'
  }
</routeMeta>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
