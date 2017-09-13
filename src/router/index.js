/**
 * Created by liushaojun on 2017/9/13.
 */
import Vue from 'vue';
import Router from 'vue-router';
import RouterConfig from './router.config';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: RouterConfig
});

export default router;
