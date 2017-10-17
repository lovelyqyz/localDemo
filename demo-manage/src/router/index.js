import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'
*/
Vue.use(Router)

export default new Router({
  routes: [
       {
            path: '/',
            redirect: '/baseTab'
        },
        {
            path: '/baseTab',
            component: resolve => require(['../components/pages/BaseTab.vue'], resolve)
        },
  ]
})
