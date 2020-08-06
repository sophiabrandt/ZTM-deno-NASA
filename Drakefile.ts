import { desc, task, sh, run } from 'https://deno.land/x/drake@v1.2.5/mod.ts'

desc('Run API')
task('start', [], async function () {
  await sh('deno run --allow-env --allow-net --allow-read src/mod.ts --port=${PORT}')
})

desc('Run API via denon for development')
task('denon', [], async function () {
  await sh(
    'denon run --allow-env --allow-net --allow-read src/mod.ts --port=${PORT}'
  )
})

desc('Run tests')
task('test', [], async function () {
  await sh('deno test --allow-read src/models/planets.spec.ts')
})


desc('Cache and lock dependencies')
task('cache', [], async function () {
  await sh('deno cache --lock=lock.json --lock-write src/deps.ts')
})

desc('Install denon for development')
task('denon-install', [], async function () {
  await sh('deno install -Af --unstable https://deno.land/x/denon@2.3.1/denon.ts')
})

run()
