import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './router'
import App from './App.vue'

let vm=new Vue({
    el:'#app',
    template:'<App></App>',
    router,
    components:{
        App
    }
})