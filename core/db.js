const Sequelize = require('sequelize');
const { MYSQL_CONF } = require('../config/db');

const sequelize = new Sequelize(MYSQL_CONF.database, MYSQL_CONF.user, MYSQL_CONF.password, {
    dialect: 'mysql',
    host: MYSQL_CONF.host,
    port: MYSQL_CONF.port,
    logging: true,
    timezone: '+08:00',
    // 更多个性化设置
    define: {                
        timestamps: true,       // 控制是否生成 create_time update_time
        paranoid: true,         // delete_time
        underscored: true,      // 下划线 替换 驼峰
    }
});

// 修改表后 是否会删除新建
sequelize.sync({
    force: false,
})

module.exports = {
    sequelize
}