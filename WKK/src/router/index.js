import Vue from 'vue';
import VueRouter from 'vue-router';
import Center from '../components/Center/Center.vue';
import CenterOne from '../components/centerone/CenterOne.vue';
import CenterTwo from '../components/centertwo/CenterTwo.vue';
import CenterRightOneBox from "../components/Center/CenterRightOneBox.vue";
import CenterRightTwoBox from "../components/Center/CenterRightTwoBox.vue"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Center
  },
  {
    path: '/one',
    component: CenterOne
  },
  {
    path: '/two',
    component: CenterTwo
  },
  {
    path: '/three',
    component: Center,
    childer:[
      {
        path: '/',
        component: CenterRightOneBox
      },
      {
        path:"threeOne",
        component: CenterRightOneBox
      },
      {
        path:"threeTwo",
        component: CenterRightTwoBox
      }
    ]
  }
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
