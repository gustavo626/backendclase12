import  express  from "express";
const app = express();

const server = app.listen(8080,()=>{
    console.log("listening in por 8080");
})


app.set('views','./views')
app.set('view engine','pug')

app.get('/hello',(req,res)=>{
    let renderObj ={
        mensaje:"Hola"
    }
    res.render('hello',renderObj);
})

app.get('/datos',(req,res)=>{
    let {min,nivel,max,titulo} = req.query;
    let renderObj ={
        valor_minimo:min,
        valor_maximo:max,
        valor_actual:nivel,
        titulo:titulo
    }
    res.render('Progress',renderObject);
})

const simulaciondecomida = () => [
    {id:1,name:'pasta',price:25},
    {id:2,name:'carne',price:60},
    {id:3,name:'bebidas',price:15},
]

app.get('/food',(req, res)=>{
    let food = simulaciondecomida();
    res.render('comida', {arregloDeComida})
})