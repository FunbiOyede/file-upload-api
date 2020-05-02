const ImagesModel = require('../models/image')
const deleteFile = require('../util/file');
class ImagesController{
    async UploadImages(req,res){
        try {
    
            const image = await ImagesModel.create({imageUrl:req.file.path})
            res.status(200).json({success:true,message:'file uploaded',data:image})
        } catch (error) {
          
           res.status(400).json({success:false,message:'file not uploaded'})
        }
    }

    async DeleteImage(req,res){
        try {
        
            const image = await ImagesModel.findByIdAndDelete(req.params.id);
            deleteFile(image.imageUrl)
            res.status(200).json({success:true,message:"deleted"})
        } catch (error) {
            res.status(400).json({message:'sigh image not found'})
        }
    }
}

module.exports = new ImagesController()