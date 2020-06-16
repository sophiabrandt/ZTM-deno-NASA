import { Router } from './deps.ts'

import * as planets from './models/planets.ts'

const router = new Router()

router.get('/', (ctx) => {
  ctx.response.body = `NASA MISSION CONTROL API`
})

router.get('/planets', ctx => {
  ctx.response.body = planets.getAll()
})

export default router
