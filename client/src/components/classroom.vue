<template>
  <div class="classroom col-lg-6">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title class">class #1</h3>
        <h3 class="panel-title room">Room #101</h3>
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
            v-for="student in studentList"
            :firstName="student.first_name"
            :lastName="student.last_name"
            :id="student.id"
            :deleteStudent="() => {deleteStudent(student.id).bind(this)}"
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

export default {
  name: 'classroom',
  data () {
    return {
      adding: false,
      studentList: [
        { id: 1, first_name: 'Harry', last_name: 'Jackson', class_id: 1 },
        { id: 2, first_name: 'Kathy', last_name: 'Freidman', class_id: 1 },
        { id: 3, first_name: 'Frank', last_name: 'Sherman', class_id: 1 },
        { id: 4, first_name: 'Betty', last_name: 'Leary', class_id: 1 },
        { id: 5, first_name: 'Kevin', last_name: 'Burns', class_id: 1 }
      ]
    }
  },
  methods: {
    addStudent: function () {
      this.adding = true
    },
    saveStudent: function () {
      this.studentList.push({
        id: this.studentList.length + 1,
        first_name: this.$refs.first.value,
        last_name: this.$refs.last.value
      })
      this.adding = false
    },
    deleteStudent: function (id) {
      console.log('deleting', id)
      let index = 0
      while (this.studentList[index].id !== id && index < this.studentList.length) {
        index++
      }
      console.log(index)
      this.studentList.splice(index, 1)
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
