import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/pages/Menu'
import Team from '@/pages/Team'
import Press from '@/pages/Press'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/menu' },
    { path: '/menu', redirect: '/menu/dinner' },
    { path: '/menu/:id', component: Menu },
    { path: '/team', redirect: '/team/asia' },
    { path: '/team/:id', component: Team },
    { path: '/press', component: Press }
  ]
})
