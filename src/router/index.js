import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Teams from '../components/models/teams/Teams'
import TeamDetails from '../components/models/teams/TeamDetails'

export default new Router({
  routes: [
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    },
    {
      path: '/teams/:teamId',
      name: 'team',
      component: TeamDetails
    },
    {
      path: '*',
      redirect: '/teams'
    }
  ]
})
