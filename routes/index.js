const router = require('express').Router();

router.get('/status',(req,res) =>{
    res.status(200).json({message:'ok ready to go'})
})


module.exports = router