<template>
    <lb-page></lb-page>
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