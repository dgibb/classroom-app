<template>
  <div id="app">
    <header>
        classroom App
    </header>

    <div class="main-content">
      <div class="row">

        <classroom v-for="eachClass in classes"
          :teacher="eachClass.teacher"
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
      .then(this.getTeachersFromDatabase())
      .then(this.getStudentsFromDatabase())
  },
  methods: {
    getClassesfromDatabase () {
      axios.get('/classes').then(response => {
        this.classes = response.data.rows
        _.map(this.classes, (eachClass) => {
          eachClass.studentList = []
          eachClass.teacher = {}
        })
      })
    },
    getStudentsFromDatabase () {
      axios.get('/students').then(response => {
        _.map(response.data.rows, (student) => {
          this.classes[student.class_id - 1].studentList.push(student)
        })
      })
    },
    getTeachersFromDatabase () {
      axios.get('/teachers').then(response => {
        _.map(response.data.rows, (teacher) => {
          this.classes[teacher.class_id - 1].teacher = teacher
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
