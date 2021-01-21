// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/*引入axios*/
import Axios from 'axios'
Vue.prototype.axios = Axios;

// Axios.defaults.withCredentials = true;


import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import QS from 'qs'
Vue.prototype.qs = QS;

// import ant from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

// Vue.use(ant)

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);



// import VueSocketio from 'vue-socket.io'
// Vue.use(VueSocketio,'http://127.0.0.1:5000');


require('!style-loader!css-loader!./assets/static/css/entry-udlite-baseline-legacy.eb8917390ca9752a614a.css');

require('!style-loader!css-loader!./assets/static/css/udlite-common-css.2e38746621ba94ca06a7.css');

require('!style-loader!css-loader!./assets/static/css/common-udlite-desktop-server-side.67362ce757023352b4ed.css');

require('!style-loader!css-loader!./assets/static/css/lohp-udlite-server-side.ba3eda0a8e58b170e111.css');

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
