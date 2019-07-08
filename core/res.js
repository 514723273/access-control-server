class BaseRes {
    constructor(message, data) {
        this.message = message;
        this.data = data;
    }
}

class SuccessRes extends BaseRes {
    constructor(message = 'ok', data) {
        super(message, data);
        this.errorCode = 0;
    }
}

class ErrorRes extends BaseRes {
    constructor(error, ctx) {
        super(error.msg);
        this.errorCode = error.errorCode;
        this.request = `${ctx.method} ${ctx.path}`;
    }
}

module.exports = {
    SuccessRes,
    ErrorRes,
}