import { Application, send, log } from './deps.ts'

const app = new Application()
const PORT = 8000

// simple request logging middleware
app.use(async (ctx, next) => {
  await next()
  const time = ctx.response.headers.get('X-Response-Time')
  console.log(`${ctx.request.method} ${ctx.request.url}: ${time}`)
})

// simple timer logging
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const delta = Date.now() - start
  ctx.response.headers.set('X-Response-Time', `${delta}ms`)
})

// serve static files
app.use(async (ctx) => {
  const filePath = ctx.request.url.pathname
  const fileWhitelist = [
    '/index.html',
    '/javascripts/script.js',
    '/stylesheets/style.css',
    '/images/favicon.png',
  ]
  await send(ctx, filePath, {
    root: `${Deno.cwd()}/public`,
  })
})

app.use((ctx) => {
  ctx.response.body = `NASA MISSION CONTROL API`
})

if (import.meta.main) {
  log.info(`Starting server on post ${PORT}...`)
  await app.listen({
    port: PORT,
  })
}
