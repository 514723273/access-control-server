const httpStatusCode = require('../constants/http-status-code');
const exceptionCode = require('../constants/exception-code');

class BaseException extends Error {
    constructor(msg = '服务器异常', errorCode = exceptionCode.SERVER_ERROR, status = httpStatusCode.BAD_REQUEST) {
        super();
        this.msg = msg;
        this.errorCode = errorCode;
        this.status = status;
    }
}

module.exports = BaseException;