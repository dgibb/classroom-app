<template>
  <div id="app">
    <header>
        classroom App
    </header>

    <div class="main-content">
      <div class="row">

        <classroom />
        <classroom />
        <classroom />
        <classroom />
        <classroom />
        <classroom />

      </div>
    </div>

    <footer>
      created by David Gibb
    </footer>
  </div>
</template>

<script>
import classroom from './components/classroom'

export default {
  name: 'app',
  components: { classroom }
  // asyncData () {
  //   console.log('asyncData running');
  //   const students = $.get('/students')
  //   return students
  // }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  margin: 0px;
}

header, footer{
  width: 100%;
  height: 110px;
  background-color: #1b1b1b;
  color: #dbdbdb;
  padding: 20px;
  text-align: left;
}

header{
  font-size: 50px;
}

footer{
  font-size: 20px;
}

.main-content{
  min-height: 100vh;
  padding: 50px;
}
</style>
