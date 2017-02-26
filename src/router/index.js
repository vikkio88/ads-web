import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Teams from '../components/models/teams/Teams'
import Team from '../components/models/teams/Team'
import TeamRoster from '../components/models/teams/TeamRoster'
import TeamCalendar from '../components/models/teams/TeamCalendar'
import Player from '../components/models/players/Player'

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
      component: Team
    },
    {
      path: '/teams/:teamId/roster',
      name: 'teamRoster',
      component: TeamRoster
    },
    {
      path: '/teams/:teamId/calendar',
      name: 'teamCalendar',
      component: TeamCalendar
    },
    {
      path: '/players/:playerId/details',
      name: 'player',
      component: Player
    },
    {
      path: '*',
      redirect: '/teams'
    }
  ]
})
