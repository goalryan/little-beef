<template>
    <yd-layout>
        <yd-navbar slot="navbar" title="NavBar">
            <router-link to="#" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
        </yd-navbar>
        <lb-menu></lb-menu>
        <yd-tabbar slot="tabbar">
            <yd-tabbar-item title="首页" link="#" active>
                <yd-icon name="home" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="购物车" link="#">
                <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="个人中心" link="#">
                <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
        </yd-tabbar>
        <router-view></router-view>
    </yd-layout>
</template>

<script type="text/babel">
    import LbMenu from './views/menu.vue';
    export default {
        name: 'app',
        components: {
            LbMenu
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>