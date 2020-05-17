const { exec } = require('../db/db')

function verifyUsername (username) {
    const sql = `select * from user where username = '${username}'`
    return exec(sql).then(row => {
        return row[0] || {}
    })
}
function register (username, password, avatar) {
    const sql = `insert into user(username, password, avatar)values('${username}', ${password}, '${avatar}') `
    return exec(sql).then(res => {
        return res
    })
}
module.exports = {
    verifyUsername,
    register
}