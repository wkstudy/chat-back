const path = require('path')
const multer = require('multer')

// 上传图片
const storageImg = multer.diskStorage({
    destination: path.resolve('./public/images'),
    filename: function(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}.${file.originalname.split('.').reverse()[0]}`)
    }
})
const uploadImg = multer({
    storage: storageImg
})

// 上传文件
// const storageFile = multer.diskStorage({

// })

module.exports = {
    uploadImg
}
