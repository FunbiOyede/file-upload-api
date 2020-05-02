const express = require('express');
const logger = require('morgan');
const multer = require('multer');
const Router = require('./routes/index');
const path = require("path")
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// if you prefer file storage use this
const fileStorage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'images')
    },
    filename:(req,file,cb) =>{
      cb(null,Date.now() + '-' + file.originalname)
    }
  })

  const fileFilter = (req,file,cb) =>{
    if(file.mimetype ==='image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
      cb(null,true)
    }
    cb(null,false)
  }

app.use(multer({storage:fileStorage,fileFilter:fileFilter}).single('image'))
app.use(Router)
app.use('/images',express.static(path.join(__dirname,"images")))
app.use('/pdf',express.static(path.join(__dirname,"pdfs")))


module.exports  = app