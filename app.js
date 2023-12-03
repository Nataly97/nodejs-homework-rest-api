const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const multer = require('multer')
const path = require('path')

const router = require("./routes/api");

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended:false,
}))

//Multer 
const storage = multer.diskStorage({
  destination: path.join(__dirname, './public/avatars'),
  filename: (req, file, cb) => {
    cb(null, path.extname(file.originalname).toLocaleLowerCase())
  }
})
app.use(multer({
  storage,
  //destino
  dest: path.join(__dirname, './public/avatars'),
  fileFilter: (req, file, cb) => {
    const filetypes = /jpg|jpeg|png|gif/ 
    const mimetype = filetypes.test(file.mimetype) 
    const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase())

    if (mimetype && extname) {
      cb(null, true)
    } else {
      cb(new Error('Valide la extensión'))
    }
  }
}).single('avatar'))

//Configuración de express para archivos estaticos
app.use(express.static(path.join(__dirname, './public')))


app.use('/api/', router())

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app
