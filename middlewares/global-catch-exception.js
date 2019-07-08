const { BaseException, UnkownException } = require('../exceptions');
const { ErrorRes } = require('../common/res');

const globalCatchException = async (ctx, next) => {

    try {
        await next();
    } catch(error) {
        const isBaseException = error instanceof BaseException;
        const isDev = process.env.NODE_ENV === 'dev';
    
        //生产环境且未知错误才在终端显示异常
        if(isDev && !isBaseException) {
            throw error;
        }

        // 生产模式且未知异常
        if(!isBaseException) {
            error = new UnkownException();
        }

        ctx.body = new ErrorRes(error, ctx);
        ctx.status = error.status;  // 设置 HTTP 状态码
    }
}

module.exports = globalCatchException;