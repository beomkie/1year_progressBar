import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/homeView.vue'
import myProfile from '@/views/myProfile.vue'
import myArchievement from '@/views/archievementView/myArchievement'
import addCard from '@/views/addCardView/addCard'
import socialView from '@/views/socialView/socialView'
import cardDetail from '@/views/cardDetailView/cardDetail'
import goalinfo from '@/views/cardDetailView/goalInfo'
import reflection from '@/views/cardDetailView/reflectionWrite.vue'
import subjectInput from '@/views/addCardView/subjectInput.vue'
import iconSelection from '@/views/addCardView/iconSelection.vue'
import contentsInput from '@/views/addCardView/contentsInput.vue'
import ruleSet from '@/views/addCardView/ruleSetView.vue'
import following from '@/views/socialView/followingView.vue';
import recommand from '@/views/socialView/recommandView.vue';
import allProgress from '@/views/archievementView/allProgress.vue';
import badgeView from '@/views/archievementView/badgeView.vue';

Vue.use(VueRouter)

const routes = [
{ 
  path: '/', 
  name: 'Home',
  component: Home 
},
{ 
  path: '/myprofile', 
  name: 'myProfile',
  component: myProfile 
},
{ 
  path: '/myArchievement', 
  name: 'myArchievement',
  component: myArchievement,
  redirect: '/myArchievement/allProgress',
  children: [
    {
      path: 'allProgress',
      name: 'allProgress',
      component: allProgress
    },
    {
      path: 'badgeView',
      name: 'badgeView',
      component: badgeView
    }
  ]
},
{ 
  path: '/addcard', 
  name: 'addCard',
  component: addCard,
  redirect: '/addCard/iconSelection',
  children: [
    {
      path: 'iconSelection',
      name: 'iconSelection',
      component: iconSelection
    },
    {
      path: 'subjectInput', 
      name: 'subjectInput',
      component: subjectInput 
    },
    {
      path: 'contents', 
      name: 'contents',
      component: contentsInput 
    },
    {
      path: 'ruleSet',
      name: 'ruleSet',
      component: ruleSet
    }
  ]
},
{ 
  path: '/socialView', 
  name: 'socialView',
  component: socialView,
  redirect: '/socialView/following',
  children: [
    {
      path: 'following',
      name: 'following',
      component: following
    },
    {
      path: 'recommand',
      name: 'recommand',
      component: recommand
    }
  ]
},
{
  path: '/cardDetail/:id', 
  name: 'cardDetail',
  component: cardDetail,
  redirect: '/cardDetail/:id/goalinfo',
  children: [
    {
      path: 'goalinfo',
      name: 'goalinfo',
      component: goalinfo
    },
    {
      path: 'reflection',
      name: 'reflection',
      component: reflection
    }
  ]
},

]

const router = new VueRouter({
  routes
})

export default router
