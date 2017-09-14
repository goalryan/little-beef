import Vue from 'vue';
import App from './App.vue';
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
// import 'vue-ydui/dist/ydui.px.css';
import router from './router';
import LbUI from './components';

Vue.use(YDUI);
Vue.use(LbUI);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
