const fs = require('fs');

/**
 * 
 * @param {string} path 
 * @description deletes Images from disk storage
 */
const deleteFiles = (path) =>{

    fs.unlink(path,(err) =>{
        if(err){
            throw err
        }
    })
}

module.exports = deleteFiles