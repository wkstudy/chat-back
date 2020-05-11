var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { loginCheck } = require('../controller/login')

/* 登录 */
router.post('/', function(req, res, next) {
    const {username, password} = req.body
    const result = loginCheck(username, password)
    result.then(data => {
        if (JSON.stringify(data) === "{}") {
            res.json(
                new ErrorModel('用户名或密码错误')
            )
            return
        }
        // 保存到session
        if (data.username) {
            req.session.username = username
        }
        if (data.password) {
            req.session.password = password
        }

        res.json(
            new SuccessModel(data)
        )
    }).catch(err => {
        res.json(
            new ErrorModel('登录失败')
        )
    })
});

module.exports = router;