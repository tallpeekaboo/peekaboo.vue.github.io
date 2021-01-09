<template>
	<div>

		<center><h1>用户注册</h1></center>

		<a-form-item label="用户名" v-bind="formlayout">
			
			<a-input v-model="username" />

		</a-form-item>

		<a-form-item v-bind="buttonlayout">
			
			<a-button type="primary"  @click="submit">注册</a-button>

		</a-form-item>


		<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
		


	</div>
</template>

<script type="text/javascript">

	export default{

		data(){

			return{

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
		mounted:function(){

			this.drawLine();

		},
		//自定义方法
		methods:{
			drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    },
			submit:function(){

				//请求后端接口
				this.axios.post('http://localhost:8000/register/',this.qs.stringify({username:this.username})).then((res) =>{

					console.log(res);

					this.$message.info(res.data.message);

				});

				//alert("注册成功");
				
			}
		}


	};
	


</script>

<style type="text/css">
	

</style>