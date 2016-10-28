<template>
  <div>
    <input class="form-control"
    v-model="newTodoText"
    v-on:keyup.enter="addNewTodo"
    placeholder="Add a todo">
    <ul class="list-group">
      <li class="list-group-item"
        v-for="(todo,index) in todos" 
        v-bind:title="todo" 
        :key="">
          {{ index + 1 }} - {{todo}} 
          <button class="btn btn-sm" @click="remove">X</button></li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data:function(){
    return {
      newTodoText:'',
      todos:[
        'adfasfasdf',
        'asVXvsdgadsg',
        'sagzvg42sdf'
        ]
    }
  },
  methods:{
    addNewTodo:function(){
      this.todos.push(this.newTodoText)
      this.newTodoText = ''
    },
    remove:function(index){
      this.todos.splice(index, 1)
    }
  }
}
</script>