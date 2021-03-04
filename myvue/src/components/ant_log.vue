<template>
  <a-form-model :layout="form.layout" :model="form" v-bind="formItemLayout">
    <a-form-model-item label="切换样式">
      <a-radio-group v-model="form.layout">
        <a-radio-button value="切换样式">
          水平
        </a-radio-button>
        <a-radio-button value="vertical">
          垂直
        </a-radio-button>
        <a-radio-button value="inline">
          内嵌
        </a-radio-button>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="用户名">
      <a-input v-model="form.username" placeholder="请输入用户名" />
    </a-form-model-item>
    <a-form-model-item label="密码">
      <a-input v-model="form.password" placeholder="请输入密码" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary" @click="login">
        登&emsp;录
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import Axios from 'axios';
export default {
  data() {
    return {
      form: {
        layout: 'horizontal',
        username: '',
        password: '',
      },
    };
  },
  computed: {
    formItemLayout() {
      const { layout } = this.form;
      return layout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    },
    buttonItemLayout() {
      const { layout } = this.form;
      return layout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    },
  },
  methods: {
    login(){
      Axios({
        url:'http://127.0.0.1:8000/newapp/login/',
        method:'post',
        data:{
          username:this.form.username,
          password:this.form.password,
        }
      }).then(resp=>{
        console.log(resp.data)
        alert(resp.data.msg)
      })
    }
  },
  created() {

  }
};
</script>