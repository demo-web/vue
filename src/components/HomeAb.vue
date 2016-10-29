<template>
  <div>
  <h3>v-model enter v-for methods</h3>
    <input class="form-control"
    v-model="newTodoText"
    v-on:keyup.enter="addNewTodo"
    placeholder="Add a todo">
    <br>
    <ul class="list-group">
      <li class="list-group-item"
        v-for="(todo,index) in todos" 
        v-bind:title="todo" 
        :key="">
          {{ index + 1 }}. {{todo}} 
          <button class="btn btn-sm rl" @click="remove">X</button></li>
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
        'abcderf',
        'def',
        'gsdfasdf'
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

<style type="text/css">
  .rl{
    margin-left: 15px;
  }
</style>