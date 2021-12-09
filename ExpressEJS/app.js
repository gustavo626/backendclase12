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
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    let renderObject={
        nombre:"Profe"
    }
    res.render('formulario',renderObject)
})

io.on('connection',socket=>{
    console.log("Cliente conectado");
    socket.emit('messagelog', menssages);
    socket.emit('welcome','Bienvenido profe')
    socket.on('message',data=>{
        messages.push(data)
        io.emit('messagelog',data); 
    })
})

app.post('/personas',(req,res)=>{
    let user={
        name:req.body.name,
        las_name:req.body.las_name,
        age:req.body.age
    }
    usuarios.push(users);
    res.send({message:"registrado"})
})