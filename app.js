const express = require('express');
const {Server} = require('socket.io');
const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT,()=>{
    console.log("Listening to port "+PORT);
})
app.use(express.static(__dirname+'/public'))
const io = new Server(server)
let messages = []; 

io.on('connection',socket=>{
    console.log("Cliente conectado");
    socket.emit('messagelog', menssages);
    socket.emit('welcome','Bienvenido profe')
    socket.on('message',data=>{
        messages.push(data)
        io.emit('messagelog',data); 
    }
})