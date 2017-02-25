import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Teams from '../components/models/teams/Teams'
import TeamRoster from '../components/models/teams/TeamRoster'

export default new Router({
  routes: [
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    },
    {
      path: '/teams/:teamId/roster',
      name: 'team',
      component: TeamRoster
    },
    {
      path: '*',
      redirect: '/teams'
    }
  ]
})
