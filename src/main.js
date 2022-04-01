// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios' //引入axios
import store from './store' //vuex
import VideoPlayer from 'vue-video-player' //播放器vue-video-player
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import Prism from "prismjs"; //页面代码高亮插件
import { Message, Input, Button, Row, Col, Card, Pagination, Carousel, 
  CarouselItem, Menu, MenuItem, Tabs, Table, Option, Select, TabPane, Form, FormItem, TableColumn } from 'element-ui'
// 按需使用el组件
Vue.prototype.$message = Message
Vue.use(Input);
Vue.use(Button)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Pagination)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Tabs)
Vue.use(Table)
Vue.use(TabPane)
Vue.use(Option)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(TableColumn)
Vue.use(Select)

Vue.use(VideoPlayer)//使用播放器插件

Vue.config.productionTip = false
Vue.prototype.axios = axios //将axios方法添加进Vue实例中

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
