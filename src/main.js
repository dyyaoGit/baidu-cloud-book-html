// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css/normalize.css' // 引入初始化样式库
import './globalStyle/init.scss' // 引入自己的初始化样式
import {instance} from './utils'
import api from './utils/api' // 引入所有的api
import 'amfe-flexible' // 引入淘宝的适配方案

Vue.prototype.$axios = instance
Vue.prototype.$api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
