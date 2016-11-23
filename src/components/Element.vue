<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-select v-model="value">
              <el-option
                v-for="item in options"
                :label="item.label"
                :value="item.value">
              </el-option>
          </el-select>
      </el-col>
      <el-col :span="6">
        <el-button @click="plu">默认按钮</el-button><el-button type="primary" @click="plus">主要按钮</el-button><el-button type="primary" @click="plus">主要按钮</el-button>
      </el-col>
      <el-col :span="6">
        <i class="el-icon-share"></i><i class="el-icon-edit"></i><i class="el-icon-delete"></i><el-button type="primary" icon="search">搜索</el-button>
      </el-col>
      <el-col :span="6">
        <el-progress type="circle" :percentage="num"></el-progress>
      </el-col>
    </el-row>
    <br>
    <el-row>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6">
        <el-time-picker
            is-range
            v-model="value3"
            placeholder="选择时间范围">
          </el-time-picker>
      </el-col>
      <el-col :span="6">
          <el-button :plain="true" @click.native="open5">消息</el-button>
            <el-button :plain="true" @click.native="open6">成功</el-button>
            <el-button :plain="true" @click.native="open7">警告</el-button>
            <el-button :plain="true" @click.native="open8">错误</el-button>

      </el-col>
    </el-row>
    <br>

    
    <br>


    <br>
    <el-row><el-col :span="12">
    <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
    </el-table>
    </el-col>
    </el-row>

</div>
  
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)






  export default {
      data() {
        return {
          value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
          num:'80',
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value: '',
          tableData: [{
                      date: '2016-05-02',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                      date: '2016-05-04',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                      date: '2016-05-01',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                      date: '2016-05-03',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1516 弄'
                    }]
        }
      },
      methods: {
          plus: function () {
            if ( this.num < 100) {
              this.num ++
            }
          },

          plu: function () {
            if ( this.num > 0) {
              this.num --
            }
          },

          handleRemove(file, fileList) {
              console.log(file, fileList);
          },

          handlePreview(file) {
              console.log(file);
          },
          open5() {
                  this.$message({
                    showClose: true,
                    message: '恭喜你，这是一条成功消息'
                  });
          },

          open6() {
                  this.$message({
                    showClose: true,
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                  });
          },

          open7() {
                  this.$message({
                    showClose: true,
                    message: '错了哦，这是一条错误消息',
                    type: 'error'
                  });
          },

          open8() {
                  this.$message({
                    showClose: true,
                    message: '错了哦，这是一条错误消息',
                    type: 'error'
                  });
          }

        }
    }
</script>