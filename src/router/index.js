import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/homeView.vue'
import myProfile from '@/views/myProfile.vue'
import myArchievement from '@/views/myArchievement'
import addCard from '@/views/addCard'
import socialView from '@/views/socialView'
import cardDetail from '@/views/cardDetail'


Vue.use(VueRouter)

const routes = [
{ 
  path: '/', 
  name: 'Home',
  component: Home },
{ 
  path: '/myprofile', 
  name: 'myProfile',
  component: myProfile 
},
{ 
  path: '/myArchievement', 
  name: 'myArchievement',
  component: myArchievement 
},
{ 
  path: '/addcard', 
  name: 'addCard',
  component: addCard 
},
{ 
  path: '/socialView', 
  name: 'socialView',
  component: socialView 
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
