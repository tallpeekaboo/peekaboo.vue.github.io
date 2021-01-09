<template>
  <a-form :form="form" @submit="handleSubmit">


    <a-form-item label="工单类型名称" v-bind="formItemLayout">
      
      <a-input v-model="name" />

    </a-form-item>


    <a-form-item label="开始日期" v-bind="formItemLayout">
      
      <a-date-picker v-model="startdate" @change="onChange" />

    </a-form-item>

<a-form-item label="图片上传" v-bind="formItemLayout">
    <a-upload
    name="file"
    :multiple="true"
    action="http://localhost:8000/upload/"
    :headers="headers"
    @change="handleChange"
  >
    <a-button> <a-icon type="upload" /> 点击上传 </a-button>
  </a-upload>

</a-form-item>


<a-form-item label="发送弹窗提醒" v-bind="formItemLayout">
   
    <a-button type="primary" @click="openbox">弹窗</a-button>

</a-form-item>

<a-form-item label="徽标" v-bind="formItemLayout">
   
   <a-badge count="0" show-zero>

    <a href="">消息盒子</a>
     
   </a-badge>

</a-form-item>

<a-form-item label="头像" v-bind="formItemLayout">
   
   <a-avatar :src="mysrc"></a-avatar>

</a-form-item>

    <a-form-item
      v-for="(k, index) in form.getFieldValue('keys')"
      :key="k"
      v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
      :label="index === 0 ? '审核人' : ''"
      :required="false"
    >
      <a-input
        v-decorator="[
          `names[${k}]`,
          {
            validateTrigger: ['change', 'blur'],
            rules: [
              {
                required: true,
                whitespace: true,
                message: 'Please input passenger\'s name or delete this field.',
              },
            ],
          },
        ]"
        placeholder="审核人"
        style="width: 60%; margin-right: 8px"
      />
      <a-icon
        v-if="form.getFieldValue('keys').length > 1"
        class="dynamic-delete-button"
        type="minus-circle-o"
        :disabled="form.getFieldValue('keys').length === 1"
        @click="() => remove(k)"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayoutWithOutLabel">
      <a-button type="dashed" style="width: 60%" @click="add">
        <a-icon type="plus" /> Add field
      </a-button>
    </a-form-item>
    <a-form-item v-bind="formItemLayoutWithOutLabel">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
let id = 0;
export default {
  data() {
    return {
      mysrc:"http://localhost:8000/static/upload/touxiang.png",
      headers: {
        authorization: 'authorization-text',
      },
      name:"",
      startdate:"",
      //表单样式
        formlayout:{
          //标签
          labelCol:{
            xs:{span:24},
            sm:{span:8}
          },
          //文本框
          wrapperCol:{
            xs:{span:24},
            sm:{span:16}
          }
        },
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 },
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 },
        },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'dynamic_form_item' });
    this.form.getFieldDecorator('keys', { initialValue: [], preserve: true });
  },
  methods: {
    //弹窗
    openbox:function(){

      this.$notification.open({

          message:'消息提示框',
          description:'您的审核未通过'

      });


    },
    handleChange(info) {

      console.log(info);

      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    onChange (value, dateString) {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
      this.startdate = dateString;
    },
    remove(k) {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      // We need at least one passenger
      if (keys.length === 1) {
        return;
      }

      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter(key => key !== k),
      });
    },

    add() {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      const nextKeys = keys.concat(id++);
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys,
      });
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const { keys, names } = values;
          console.log('Received values of form: ', values);
            var mylist = keys.map(key => names[key])

            console.log(mylist);
            console.log(this.name);
            console.log(this.startdate);


            //this.mysrc = "data:image/png;base64,"+"";

            //请求后端接口
       
        }
      });
    },
  },
};
</script>
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>