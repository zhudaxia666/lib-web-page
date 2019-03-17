// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '!style-loader!css-loader!stylus-loader!./assets/stylus/index.styl';
// import './assets/css/bootstrap.css';
// // // import 'bootstrap/dist/js/bootstrap.min.js';
// import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/theme.css';
// import './assets/css/bootstrap-reset.css';
import './assets/css/font-awesome/css/font-awesome.css';
import './assets/css/flexslider.css';
// import './assets/bxslider/jquery.bxslider.css';
import './assets/css/revolution_slider/css/rs-style.css';
import './assets/css/revolution_slider/rs-plugin/css/settings.css';
import './assets/css/style.css';
import './assets/css/style-responsive.css';

// import MintUI from 'mint-ui'
// Vue.use(MintUI)
// import 'mint-ui/lib/style.css'
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
