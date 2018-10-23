<template lang="html">
  <tr v-if="!editing">
    <th><p>{{id}}</p></th>
    <th><p>{{mutFirstName}}</p></th>
    <th><p>{{mutLastName}}</p></th>
    <th class='button-container'>
      <button @click="editStudent">Edit</button>
      <button @click="deleteStudent">Delete</button>
    </th>
  </tr>
  <tr v-else>
    <th>{{id}}</th>
    <th> <input ref="first" :placeholder="firstName"> </th>
    <th> <input ref="last" :placeholder="lastName"> </th>
    <th class='button-container'>
      <button @click="updateStudent">Save</button>
      <button @click="cancelEdit">cancel</button>
    </th>
  </tr>
</template>

<script>
import axios from 'axios'

export default {
  name: 'student',
  props: {
    firstName: String,
    lastName: String,
    id: Number,
    classId: Number,
    deleteStudent: Function
  },
  data () {
    return {
      editing: this.adding,
      mutFirstName: this.firstName,
      mutLastName: this.lastName
    }
  },
  methods: {
    editStudent: function () {
      this.editing = true
    },
    updateStudent: function () {
      axios.put('/students/update', {
        id: this.id,
        first_name: this.$refs.first.value,
        last_name: this.$refs.last.value,
        class_id: this.classId
      }).then(res => {
        this.mutFirstName = this.$refs.first.value
        this.mutLastName = this.$refs.last.value
        this.editing = false
      })
    },
    cancelEdit: function () {
      this.editing = false
    }
  }
}
</script>

<style lang="scss" scoped>
p{
  padding: 5px 0px;
  margin: 0px;
}

.button-container{
  text-align: right;
}
</style>
