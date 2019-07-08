const Router = require('koa-router');
const router = new Router();

router.get('/v1/test', async (ctx, next) => {
    const { ParameterException } = require('../../../core/http-exception');
    throw new ParameterException("fuck you");
});

module.exports = router;