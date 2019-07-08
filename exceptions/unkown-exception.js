const HttpException = require('./base-exception');
const httpStatusCode = require('../constants/http-status-code');
const exceptionCode = require('../constants/exception-code');

class UnkownException extends HttpException {
    constructor(msg = '未知错误', errorCode = exceptionCode.UNKNOWN_ERROR) {
        super(msg, errorCode, httpStatusCode.INTERNAL_SERVER_ERROR);
    }
}

module.exports = UnkownException;