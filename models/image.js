const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    filePath: {
        type: String,
        required: true,
      }
})

module.exports = mongoose.model("Images",schema)