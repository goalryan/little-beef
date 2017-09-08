import Vue from 'vue';
import App from './App.vue';
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
// import 'vue-ydui/dist/ydui.px.css';

Vue.use(YDUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
