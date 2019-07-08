const { sequelize } = require('../../core/db');

const { Sequelize, Model } = require('sequelize');

class User extends Model {

}

User.init({
    // Sequelize 会自动生成该 id 字段
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: Sequelize.STRING,         // 用户名
    telephone: Sequelize.STRING,        // 电话
    email: Sequelize.STRING,            // 邮箱
    password: Sequelize.STRING,         // 密码
    deptId: Sequelize.INTEGER,          // 所属部门 id
    status: Sequelize.INTEGER,          // 用户状态 正常0 待审核1 冻结-1
    name: Sequelize.STRING,             // 真实姓名
    remark: Sequelize.STRING,           // 备注
    operator: Sequelize.STRING,         // 操作者
    operateIp: Sequelize.STRING,        // 操作时 IP
}, {
    sequelize,          // 传入数据库
    tableName: 'user'   // 指定表名 默认大写开头 复数形式
});