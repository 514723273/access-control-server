const Koa = require('koa');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');

const globalCatchException = require('./middlewares/global-catch-exception');
const test = require('./app/api/v1/test');

const app = new Koa();

app.use(globalCatchException);

// middlewares
app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

// routes
app.use(test.routes());

module.exports = app;