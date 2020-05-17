var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { register, verifyUsername } = require('../controller/register')
const { uploadImg } = require('../utils/upload')

/* 注册 */
router.post('/', uploadImg.single('avatar'), function(req, res, next) {
    const { username, password } = req.body
    const result = register(username, password, req.file.path)
    result.then(data => {
        if (data.affectedRows === 1) {
            res.json(
                new SuccessModel({
                    username,
                    avatarSrc: req.file.path
                })
            )
            return
        }
        res.json(new ErrorModel('注册失败，请重试'))
    }).catch(err => {
        res.json(
            new ErrorModel(err)
        )
    })
});

/* 用户名唯一 */
router.post('/verify', function (req, res, next) {
    const { username } = req.body
    const result = verifyUsername(username)
    result.then(data => {
        if (JSON.stringify(data) === '{}') {
            res.json( new SuccessModel('请放心使用'))
            return
        }
        res.json(new ErrorModel('用户名重复，请重新设置'))
    }).catch(err => {
        res.json(new ErrorModel(err))
    })
})
module.exports = router;