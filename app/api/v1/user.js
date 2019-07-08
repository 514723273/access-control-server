const Router = require('koa-router');
const User = require('../../models/user');
const { RegisterValidator } = require('../../validators');
const { SuccessRes } = require('../../../core/res');

const router = new Router();

router.prefix('/v1/user');

// 注册
router.post('/register', async (ctx, next) => {

    const v = await new RegisterValidator().validate(ctx);

    // 取出校验后的数据
    const user = {
        email: v.get('body.email'),
        password: v.get('body.password2'),
    }
    await User.create(user);
    ctx.body = new SuccessRes();
});

module.exports = router;