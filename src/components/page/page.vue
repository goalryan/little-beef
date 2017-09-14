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
            <yd-tabbar-item title="首页" link="#" active>
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

<!--<template>-->
<!--<transition name="page-fade">-->
<!--<div class="info-page" :style="index">-->
<!--<div class="page-wrapper">-->
<!--<div class="page-header">-->
<!--<div class="header-item"><i class="gray icon-return" @click="close"></i></div>-->
<!--<div class="header-item">-->
<!--<slot name="title">-->
<!--{{title}}-->
<!--</slot>-->
<!--</div>-->
<!--<div class="header-item"><i class="gray icon-innerpage__close" @click="close"></i></div>-->
<!--</div>-->
<!--<div class="page-body">-->
<!--<div class="page-content">-->
<!--<slot></slot>-->
<!--</div>-->
<!--</div>-->
<!--<div class="page-footer">-->
<!--<slot name="footer"></slot>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--</transition>-->
<!--</template>-->

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
            }
        }
    }
</script>