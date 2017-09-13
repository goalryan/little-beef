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

const TITLE_PREFIX = '我的经管';

router.afterEach((route) => {
    const { title } = route.meta;
    document.title = title ? `${TITLE_PREFIX}-${title}` : TITLE_PREFIX;
});

export default router;
