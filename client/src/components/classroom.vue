<template>
  <div class="classroom col-lg-6">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title class">class #{{classId}}</h3>
        <h3 class="panel-title room">Room #{{roomNumber}}</h3>
      </div>
      <div class="panel-body">
        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <student
            v-for="student in mutStudentList"
            :firstName="student.first_name"
            :lastName="student.last_name"
            :id="student.id"
            :classId="classId"
            :deleteStudent="() => { deleteStudent(student.id) }"
            :key="student.id"
            />
            <tr v-if="adding">
              <th>-</th>
              <th><input type="text" name="" ref="first"></th>
              <th><input type="text" name="" ref="last"></th>
              <th class='button-container'>
                <button @click="saveStudent">Save</button>
                <button @click="cancelAdd">Cancel</button>
              </th>
            </tr>
            <tr v-else>
              <button type="button" name="button" @click="addStudent">Add Student</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import student from './student'
import axios from 'axios'

export default {
  name: 'classroom',
  props: {
    studentList: Array,
    classId: Number,
    roomNumber: Number
  },
  data () {
    return {
      adding: false,
      mutStudentList: this.studentList || []
    }
  },
  methods: {
    addStudent: function () {
      this.adding = true
    },
    saveStudent: function () {
      const student = {
        first_name: this.$refs.first.value,
        last_name: this.$refs.last.value,
        class_id: this.classId
      }
      axios.post('/students/new', student).then(res => {
        const id = res.data[0]
        this.mutStudentList.push({ id, ...student })
        this.adding = false
      })
    },
    deleteStudent: function (id) {
      console.log('deleting', id)

      axios.delete('/students/delete', { data: { id: id } }).then(res => {
        let index = 0
        while (this.mutStudentList[index].id !== id && index < this.mutStudentList.length) {
          index++
        }
        console.log(index)
        this.mutStudentList.splice(index, 1)
      })
    },
    cancelAdd: function () {
      this.adding = false
    }
  },
  components: { student }
}
</script>

<style lang="scss" scoped>
.panel-heading{
  display: flex;
  .class{
    white-space: nowrap;
    flex: 1 0 0;
  }
  .room{
    white-space: nowrap;
    flex: 0 1 0;
  }
}
.button-container{
  text-align: right;
}
</style>
