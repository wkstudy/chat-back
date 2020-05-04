const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/conf')


// 连接mysql
var con = mysql.createConnection(MYSQL_CONF)
con.connect()

// const delsql = `delete from user where pssword = 'm'`
// const insertsql = `insert into user(username) values('v')`

function exec (sql) {
        return new Promise((resolve, reject) => {
            con.query(sql, (error, results, fields) => {
                if (error) {
                    reject(error)
                    return
                }
                resolve(results)
            })
        })
}

module.exports = {
    exec
}


