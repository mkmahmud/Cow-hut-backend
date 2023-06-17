import express from 'express'
import { AuthRoute } from '../modules/auth/auth.route'
import { UserRoutes } from '../modules/user/user.route'
import { CowRoutes } from '../modules/cows/cow.route'

const routes = express.Router()

// Routes
const Routers = [
  {
    path: '/auth',
    route: AuthRoute,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/cows',
    route: CowRoutes,
  },
]

Routers.forEach(route => routes.use(route.path, route.route))

// routes.use('users/', UserRoutes)
// routes.use('academic-semesters/', academicSemesterRoutes)

export default routes