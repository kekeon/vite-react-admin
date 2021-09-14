import { RouteConfig } from 'react-router-config'

import App from '../App'
import Index from '../pages/login'
import Layouts from '../layouts'
import Overview from '../pages/overview'
import Charts from '../pages/charts'

export const routes: RouteConfig[] = [
  {
    component: App,
    routes: [
      {
        path: '/login',
        component: Index,
        exact: true,
      },
      {
        path: '/',
        component: Layouts,
        routes: [
          {
            path: '/overview',
            component: Overview,
          },
          {
            path: '/charts',
            component: Charts,
          },
        ],
      },
    ],
  },
]
