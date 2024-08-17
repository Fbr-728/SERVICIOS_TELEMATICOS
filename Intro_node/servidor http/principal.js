import yosay from 'yosay';

//modo http esta integrado con node
const http = require("http");
const servidor = http.createServer
//
//
const server=http.createServer((req, res)=>{
    res.end(yosay('Hello, and welcome to my fantastic generator full of whimsy and bubble gum!'));
})
const puerto = 3800;
server.listen(puerto, ()=>{
    console.log('el servidor esta corriendo el puerto '+puerto)
});

