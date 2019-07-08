const { BaseValidator, Rule } = require('./base-validator');
const User = require('../models/user');

class RegisterValidator extends BaseValidator {
    constructor() {
        super();
        this.email = [
            new Rule('isEmail', '不符合 Email 规范')
        ];
        this.password1 = [
            new Rule('isLength', '密码至少 6 个字符，最多 32 个字符', {min: 6, max: 32}),
            new Rule('matches', '密码需要字母或数字或特殊字符组合', '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]'),           // 防止用户密码输入过于简单
        ];
        this.password2 = this.password1;
    }

    // 必须以 validate 开头
    validatePassword(vals) {
        const password1 = vals.body.password1;          // 取决于传递方式
        const password2 = vals.body.password2;
        if(password1 !== password2) {
            throw new Error('两个密码必须相同');        // lin-validator 会对该错误先处理，汇聚所有异常
        }
    }

    async validateEmail(vals) {
        const email = vals.body.email;
        const user = await User.findOne({
            where: {
                email,
            }
        });
        if(user) {
            throw new Error('email 已存在');
        }
    }
}

module.exports = RegisterValidator;