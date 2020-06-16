import { Router } from './deps.ts'

const router = new Router()

router.get('/', (ctx) => {
  ctx.response.body = `NASA MISSION CONTROL API`
})

export default router
