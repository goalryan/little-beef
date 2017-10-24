<template>
    <yd-layout>
        <yd-navbar slot="navbar" title="NavBar">
            <router-link to="#" slot="left">
                <!--<yd-navbar-back-icon></yd-navbar-back-icon>-->
            </router-link>
        </yd-navbar>
        <div>
            <slot name="body">
                默认
            </slot>
        </div>
        <yd-tabbar slot="tabbar">
            <yd-tabbar-item title="首页" link="#" @click="clickHome" active>
                <yd-icon name="home" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="商品" link="#">
                <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="联系人" link="#">
                <yd-icon name="phone2" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="个人中心" link="#">
                <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
        </yd-tabbar>
        <router-view></router-view>
    </yd-layout>
</template>

<script>
    export default{
        name: 'LbPage',
        props: {
            title: {
                type: String,
                default: '详情页'
            }
        },
        data() {
            return {};
        },
        methods: {
            close() {
                this.$emit('close');
            },
            clickHome() {
                console.log('sss');
            }
        }
    }
</script>