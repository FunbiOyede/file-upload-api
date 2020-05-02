const router = require('express').Router();
const ImageController = require('../controllers/image');
const InvoiceController = require('../controllers/PDF');
router.get('/status',(req,res) =>{
    res.status(200).json({message:'ok ready to go'})
})

router.post('/image',ImageController.UploadImages)
router.delete('/image/:id',ImageController.DeleteImage);
router.post('/pdf',InvoiceController.createFile)

module.exports = router