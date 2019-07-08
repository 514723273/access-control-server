const HttpException = require('./base-exception');
const httpStatusCode = require('../constants/http-status-code');

class ParameterException extends HttpException {
    constructor(msg = '参数错误', errorCode) {
        super(msg, errorCode, httpStatusCode.BAD_REQUEST);
    }
}

module.exports = ParameterException;