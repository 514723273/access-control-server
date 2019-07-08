const env = process.env.NODE_ENV;

let MYSQL_CONF;
let REDIS_CONF;

if(env === 'dev') {
    MYSQL_CONF = {
        host: '192.168.147.128',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'access_control_db'
    }

    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1',
    }
}

if(env === 'production') {
    MYSQL_CONF = {
        host: '192.168.147.128',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'access_control_db'
    }

    REDIS_CONF = {
        port: 6379,
        host: '192.168.147.128',
    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF,
}