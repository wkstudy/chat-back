const { exec } = require('../db/db')

function loginCheck (username, password) {
    const sql = `select * from user where username = '${username}' and password = '${password}'`
    return exec(sql).then(row => {
        return row[0] || {}
    })
}

module.exports = {
    loginCheck
}