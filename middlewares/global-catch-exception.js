const { HttpException, UnkownException } = require('../core/http-exception');

const globalCatchException = async (ctx, next) => {

    try {
        await next();
    } catch(error) {
        const isHttpException = error instanceof HttpException;
        const isDev = process.env.NODE_ENV === 'dev';
    
        //生产环境且未知错误才在终端显示异常
        if(isDev && !isHttpException) {
            throw error;
        }
        // 未知异常
        if(!isHttpException) {
            error = new UnkownException();
        }
        ctx.body = {
            msg: error.msg,
            errorCode:  error.errorCode,
            request: `${ctx.method} ${ctx.path}`,
        };
        ctx.status = error.status;  // 设置 HTTP 状态码
    }
}

module.exports = globalCatchException;