import { desc, task, sh, run } from 'https://deno.land/x/drake@v1.4.0/mod.ts'

desc('Run API')
task('start', [], async function () {
  await sh('deno run --allow-env --allow-net --allow-read src/mod.ts --port=${PORT}')
})

desc('Run tests')
task('test', [], async function () {
  await sh('deno test --allow-read src/models/planets.spec.ts')
})

desc('Cache and lock dependencies')
task('cache', [], async function () {
  await sh('deno cache --lock=lock.json --lock-write src/deps.ts')
})

desc('Reload cached dependencies')
task('reload', [], async function () {
  await sh('deno cache --reload src/deps.ts')
})


run()
