const multer = require('multer')
const path = require('path')
const { v4: uuid } = require('uuid')

//Multer 
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../tmp'),
    filename: (req, file, cb) => {
        const uniqueName = `${file.filename}-${uuid()}${path.extname(file.originalname)}`
        return cb(null, uniqueName)
    },
  })
  // Multer middleware para subir imagenes a tmp y luego guardarlas en public/uploads
  const upload = multer({
    storage,
    dest: path.join(__dirname, '../tmp'),
    fileFilter: (req, file, cb) => {
      const filetypes = /bmp|tiff|jpg|jpeg|png|gif/ 
      const mimetype = filetypes.test(file.mimetype) 
      const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase())
  
      if (mimetype && extname) {
        cb(null, true)
      } else {
        cb(new Error('It must be a valid ext.'))
      }
    },
    limits: 5 * 1024 * 1024
  })

  module.exports = {
    upload
  }