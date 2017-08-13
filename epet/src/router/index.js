import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import dogfood from '../components/dogfood/dogfood.vue'
import temai from '../components/temai/temai.vue'
import video from '../components/video/video.vue'
import classroom from '../components/classroom/classroom.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/dogfood',
      component: dogfood
    },
    {
      path: '/temai',
      component: temai
    },
    {
      path: '/video',
      component: video
    },
    {
      path: '/classroom',
      component: classroom
    }
  ]
})
