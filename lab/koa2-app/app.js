import Koa from 'koa'
const app = new Koa()

// Common function
app.use((ctx, next) => {
  const start = new Date()
  return next().then(() => {
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  })
})

// async functions(Babel required)
app.use(async(ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// response
app.use(ctx => {
  ctx.body = 'Hello Ting'
})

app.listen(3000, () => console.log('server started 3000'));

export default app
