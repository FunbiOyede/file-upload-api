const mongoose = require('mongoose');


module.exports = () =>{
    mongoose.connect('mongodb://localhost:27017/fileUpload',{
        useUnifiedTopology: true,
        useNewUrlParser: true})
        mongoose.connection.on("open", () => {
            console.log(`connection opened `);
          });
          mongoose.connection.on("error", () => {
            console.log(`connection error `);
          });
          mongoose.connection.on("close", () => {
            console.log(`connection closed`);
          });
              
}