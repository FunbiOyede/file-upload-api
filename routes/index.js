const router = require('express').Router();
const ImageController = require('../controllers/images');
router.get('/status',(req,res) =>{
    res.status(200).json({message:'ok ready to go'})
})

router.post('/upload',ImageController.uploadImages)

module.exports = router