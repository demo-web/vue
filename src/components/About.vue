<template>
<div class="m100">
  
  <div class="form-group">
    <label>name:</label>
    <input type="text" v-model.trim="newPerson.name"/>
  
    <label>number:</label>
    <input type="number" v-model.trim="newPerson.age"/>
  
    <label>select:</label>
    <select v-model="newPerson.sex">
      <option v-for="sex in sexPerson">{{sex.sex}}</option>
    </select>
    <button class="btn" @click="add">增加</button>
  </div>
  <table>
    <thead>
      <tr>
        <th v-for="col in cols">{{col}}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(peopl,index) in people">
                    <td v-for="(v,d,ii) in peopl" @dblclick="dbltodo(index,ii,v)">
                    <label v-show="index+'-'+ii !== editedTodo">{{v}}</label>
                    <input 
                    type="text" 
                    v-model="va"
                    v-if="index+'-'+ii == editedTodo"
                    @blur="doneEdit(va,index,d,v)"
                    @keyup.enter="doneEdit(va,index,d,v)"
                    @keyup.esc="cancelEdit"
                    v-focus></td>
                    
                    <td><button class="btn" @click="del(index)">X</button></td>
                  </tr>
    </tbody>
  </table>

  <p>
  计算属性：
  </p>
</div>
</template>

<script>
/* eslint-disable */
export default {
    data () {
      return {
        va:'',
        sexPerson: [
              { sex: '男', value: '男1' },
              { sex: '女', value: '女2' }
            ],
        newPerson: {
          name: 'Jack',
          age: 18,
          sex: '男'
        },
        editedTodo:false,
        cols:['name','number','select','操作'],
        people: [{
          name: 'Jack',
          age: 30,
          sex: 'Male'
        }, {
          name: 'Bill',
          age: 26,
          sex: 'Male'
        }, {
          name: 'Tracy',
          age: 22,
          sex: 'Female'
        }, {
          name: 'Chris',
          age: 36,
          sex: 'Male'
        }]
      }
    },
      methods:{
        add: function(){
          this.people.push(this.newPerson);
          // 添加完newPerson对象后，重置newPerson对象
          this.newPerson = {name: '', age: 0, sex: 'Male'}
        },
        del: function(index){
          // 删一个数组元素
          this.people.splice(index,1);
        },
        dbltodo:function(i,ii,o){
          this.va = o
          this.editedTodo = i +'-'+ ii
        },
        doneEdit: function (v,index,d,o) {
          v==""?this.people[index][d]=o:this.people[index][d]=v
          this.editedTodo = null
         },
        cancelEdit: function (todo) {
          this.editedTodo = null
         }
      },
        directives: {
          focus: {
            inserted: function (el) {
                el.focus()
              }
          }
        }
}
</script>

 <style type="text/css">
      .router-link-active{
        background-color: #eaeaea;
      }
      .fl{float: left}
      .list-group{
          display: inline-block;
      }
      .m100{
          margin: 0 100px;
      }
      th,tr{
        width: 200px;
        line-height: 30px;
        font-size: inherit;
        text-align: center;
      }
      td{border: 1px solid #eaeaea;padding: 5px; text-align: left;}
      input{ outline: none; border: 1px solid #eaeaea;padding:0 5px; line-height: 30px;}
</style>
