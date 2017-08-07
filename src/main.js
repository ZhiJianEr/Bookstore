
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/index.less';
import VueLazeLoad from 'vue-lazyload'
Vue.use(VueLazeLoad);
import VueScroller from 'vue-scroller'
Vue.use(VueScroller);
import store from './store'
new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
