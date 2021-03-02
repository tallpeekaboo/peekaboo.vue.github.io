<template>
  <a-form-model :layout="form.layout" :model="form" v-bind="formItemLayout">
    <a-form-model-item label="Form Layout">
      <a-radio-group v-model="form.layout">
        <a-radio-button value="切换样式">
          Horizontal
        </a-radio-button>
        <a-radio-button value="vertical">
          Vertical
        </a-radio-button>
        <a-radio-button value="inline">
          Inline
        </a-radio-button>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="用户名">
      <a-input v-model="form.fieldA" placeholder="请输入用户名" />
    </a-form-model-item>
    <a-form-model-item label="密码">
      <a-input v-model="form.fieldB" placeholder="请输入密码" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary">
        注&emsp;册
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data() {
    return {
      form: {
        layout: 'horizontal',
        fieldA: '',
        fieldB: '',
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
};
</script>
