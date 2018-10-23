<template lang="html">
  <tr v-if="!editing">
    <th><p>{{id}}</p></th>
    <th><p>{{firstName}}</p></th>
    <th><p>{{lastName}}</p></th>
    <th class='button-container'>
      <button @click="editStudent">Edit</button>
      <button @click="deleteStudent">Delete</button>
    </th>
  </tr>
  <tr v-else>
    <th>{{id}}</th>
    <th> <input type="text" name="" :placeholder="firstName"> </th>
    <th> <input type="text" name="" :placeholder="lastName"> </th>
    <th class='button-container'>
      <button @click="saveStudent">Save</button>
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
      editing: this.adding
    }
  },
  methods: {
    editStudent: function () {
      this.editing = true
    },
    saveStudent: function () {
      axios.put('/students/update', { data: { id: this.id } }).then(res => {
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
