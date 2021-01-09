<template>
	<div>

		<center><h1>用户登录</h1></center>

		<a-form-item label="用户名" v-bind="formlayout">
			
			<a-input v-model="username" />

		</a-form-item>


		<a-form-item label="图片验证码" v-bind="formlayout">
			
			<img src="http://localhost:8000/code/" />

		</a-form-item>


		<a-form-item label="滑块验证码" v-bind="formlayout">
			
			<drag-verify :width="width" :height="height" :text="text" ></drag-verify>

		</a-form-item>


		<a-form-item v-bind="buttonlayout">
			
			<a-button type="primary"  @click="submit">登录</a-button>

			<img style="margin-left:20px;cursor:pointer;" @click="dingding" src="http://localhost:8000/static/dingding.png" />

		</a-form-item>

		<!--步骤条-->
		<a-steps :current="1">

			<a-step title="第一步" description="这一步已经完成">
				
			</a-step>

			<a-step title="第一步" description="这一步已经完成">
				

			</a-step>

			<a-step title="第一步" description="这一步已经完成">
				
			</a-step>


		</a-steps>

		
		


	</div>
</template>

<script type="text/javascript">

import dragVerify from 'vue-drag-verify';

	export default{

		data(){

			return{
				width:300,
				height:42,
				text:'请拖动滑块',
				selected:"",
				startdate:"",
				username:"",
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
				//按钮样式
				buttonlayout:{
					//按钮
					wrapperCol:{
						xs:{
							span:24,
							offset:0
						},
						sm:{span:16,offset:8}
					}
				}
			}

		},
		//引入组件
		components:{
			'dragVerify':dragVerify
		},
		//自定义方法
		methods:{
			//钉钉登录
			dingding:function(){

				window.location.href = "http://localhost:8000/dingding_url/";

			},
			submit:function(){


				//this.$router.push('/home')

				//请求后端接口
				this.axios.post('http://localhost:8000/register/',this.qs.stringify({username:this.username})).then((res) =>{

					console.log(res);

					this.$message.info(res.data.message);

				});

				//delete
				// this.axios.delete('http://localhost:8000/register/',{data:{username:'1234',jwt:localStorage.get("jwt")}}).then((res) =>{

				// 	console.log(res);

				// 	this.$message.info(res.data.message);

				// });

				//alert("注册成功");
				
			}
		}


	};
	


</script>

<style type="text/css">
	

</style>