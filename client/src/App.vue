<template>
  <div id="app">
    <header>
        classroom App
    </header>

    <div class="main-content">
      This is the main content
    </div>

    <footer>
      created by David Gibb
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  // asyncData () {
  //   const students = $.get('/students')
  //   return students
  // },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
