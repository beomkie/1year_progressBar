import Vue from 'vue'
import VueRouter from 'vue-router'
import yearProgress from '@/views/yearProgress.vue'
import myProfile from '@/views/myProfile.vue'
import myGoal from '@/views/myGoal'
import addCard from '@/views/addCard'
import feedView from '@/views/FeedView'
import cardDetail from '@/views/cardDetail'


Vue.use(VueRouter)

const routes = [
{ 
  path: '/', 
  name: 'Home',
  component: yearProgress },
{ 
  path: '/myprofile', 
  name: 'myProfile',
  component: myProfile 
},
{ 
  path: '/mygoal', 
  name: 'myGoal',
  component: myGoal 
},
{ 
  path: '/addcard', 
  name: 'addCard',
  component: addCard 
},
{ 
  path: '/feedView', 
  name: 'feedView',
  component: feedView 
},
{ 
  path: '/cardDetail/:id', 
  name: 'cardDetail',
  component: cardDetail 
},


// 추가적인 라우트 정의
]

const router = new VueRouter({
  routes
})

export default router
