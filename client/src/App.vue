<template>
  <div id="app">
    <header>
        classroom App
    </header>

    <div class="main-content">
      <div class="row">

        <classroom v-for="eachClass in classes"
          :studentList="eachClass.studentList"
          :classId="eachClass.id"
          :roomNumber="eachClass.room_number"
          :key="eachClass.class_id"
        />

      </div>
    </div>

    <footer>
      created by David Gibb
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import classroom from './components/classroom'

export default {
  name: 'app',
  components: { classroom },
  data () {
    return {
      classes: []
    }
  },
  created () {
    Promise.resolve(this.getClassesfromDatabase())
      .then(this.getStudentsFromDatabase())
  },
  methods: {
    getClassesfromDatabase: function () {
      axios.get('/classes').then(response => {
        this.classes = response.data.rows
        _.map(this.classes, (eachClass) => {
          eachClass.studentList = []
        })
      })
    },
    getStudentsFromDatabase: function () {
      axios.get('/students').then(response => {
        _.map(response.data.rows, (student) => {
          this.classes[student.class_id].studentList.push(student)
        })
      })
    }
  }
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
