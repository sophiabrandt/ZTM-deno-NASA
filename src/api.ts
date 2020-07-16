import { Router } from './deps.ts'
import { Launch } from './models/launches.ts'

import * as planets from './models/planets.ts'
import * as launches from './models/launches.ts'

const router = new Router()

router.get('/', (ctx) => {
  ctx.response.body = `NASA MISSION CONTROL API`
})

router.get('/planets', (ctx) => {
  ctx.response.body = planets.getAll()
})

router.get('/launches', (ctx) => {
  ctx.response.body = launches.getAll()
})

router.get('/launches/:id', (ctx) => {
  if (ctx.params?.id) {
    const launchesList = launches.getOne(Number(ctx.params.id))
    launchesList
      ? (ctx.response.body = launchesList)
      : ctx.throw(400, 'Launch with that ID does not exist')
  }
})

router.post('/launches', async (ctx) => {
  const launch: Launch = await ctx.request.body().value

  if (!!launch) {
    launches.addOne(launch)
  }

  ctx.response.body = { success: true }
  ctx.response.status = 201
})

router.delete('/launches/:id', (ctx) => {
  if (ctx.params?.id) {
    const result = launches.removeOne(Number(ctx.params.id))
    ctx.response.body = { success: result }
  }
})

export default router
