const socket = io();

let input = document.getElementById('mensaje');
let user = document.getElementById('user')
input.addEventListener('keyup',(e)=>{
    if(e.key==="Enter"){
        if(e.target.value){
            socket.emit('message',{user:user.value,message:e.target.value}); 
        }
    }

})
socket.on('welcome',data=>{
    alert(data);
})
socket.on('messagelog',data =>{
    let p = document.getElementById('log');
    let mensajes = data.map(message=>{
        return '<div></div>'${message.user} dice: ${message.message}'</span></div>'
    }).join('');
    p.innerHTML=mensajes;
})

document.addEventListener('submit', registrarUsuario);

function registrarUsuario(e){
    e.preventDefault();
    let form = document.getElementById('formulario');
    let data = new FormData(form);
    let name = data.get('name');
    let last_name = data.get('last_name');
    let age = data.get('age');
    let Object ={
        name:name,
        last_name:last_name,
        age:age
    }
    fetch('/personas',{
        method:'POST' ,
        body:Object,
        headers:{
            'content-type':'application/json'
        }
    }).then(result=>{
        return result.json()
    }).then(Json=>{
        console.log(json);
        location.href='/'
    })
}