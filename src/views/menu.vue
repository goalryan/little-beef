<template>
    <lb-page>
        <yd-cell-group>
            <yd-cell-item arrow>
                <yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
                <span slot="left">我的订单</span>
                <span slot="right">查看全部订单</span>
            </yd-cell-item>

            <yd-cell-item arrow>
                <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
                <span slot="left">图标</span>
                <span slot="right">图标是image</span>
            </yd-cell-item>
        </yd-cell-group>
    </lb-page>
</template>
<script>
    export default{
        components: {},
        name: 'menu',
        data(){
            return {
                menuName: ''
            }
        }
    }
</script>