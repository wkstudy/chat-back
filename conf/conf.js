const env = process.env.NODE_ENV

let MYSQL_CONF

if (env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'chat'
    }
}
if (env === 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'chat'
    }
}

module.exports = {
    MYSQL_CONF
}