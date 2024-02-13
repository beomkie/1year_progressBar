import Vue from 'vue'
import VueRouter from 'vue-router'
import yearProgress from '@/views/yearProgress.vue'
import myProfile from '@/views/myProfile.vue'
import myGoal from '@/views/myGoal'
import addCard from '@/views/addCard'
import feedView from '@/views/FeedView'


Vue.use(VueRouter)

const routes = [
{ path: '/', component: yearProgress },
{ path: '/myprofile', component: myProfile },
{ path: '/mygoal', component: myGoal },
{ path: '/addcard', component: addCard },
{ path: '/feedView', component: feedView },


// 추가적인 라우트 정의
]

const router = new VueRouter({
  routes
})

export default router
