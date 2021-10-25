<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloCasidy msg="Welcome to Your Vue.js App"/>-->
    <library></library>
  </div>
</template>

<script>
// import HelloCasidy from './components/HelloWorld.vue'
import Library from "./components/Library";

export default {
  name: 'App',
  components: {
    // HelloCasidy,
    Library
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
