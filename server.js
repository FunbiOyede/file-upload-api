const app = require('./app');
const http = require('http');
require('./util/db')()

const server = http.createServer(app);

server.listen(5000,() =>{
    console.log("konichiwa")
})