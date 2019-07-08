const httpStatusCode = require('../constants/http-status-code');
const exceptionCode = require('../constants/exception-code');


class HttpException extends Error {
    constructor(msg = '服务器异常', errorCode = exceptionCode.SERVER_ERROR, status = httpStatusCode.BAD_REQUEST) {
        super();
        this.msg = msg;
        this.errorCode = errorCode;
        this.status = status;
    }
}

class UnkownException extends Error {
    constructor(msg = '未知错误', errorCode = exceptionCode.UNKNOWN_ERROR) {
        super(msg, errorCode, httpStatusCode.INTERNAL_SERVER_ERROR);
    }
}

class ParameterException extends HttpException {
    constructor(msg = '参数错误', errorCode) {
        super(msg, errorCode, httpStatusCode.BAD_REQUEST);
    }
}

module.exports = {
    HttpException,
    UnkownException,
    ParameterException,
};