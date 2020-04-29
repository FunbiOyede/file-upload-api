const express = require('express');
const logger = require('morgan');
const multer = require('multer');
const Router = require('./routes/index');
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

app.use(multer({storage:fileStorage}).single('image'))
app.use(Router)


module.exports  = app