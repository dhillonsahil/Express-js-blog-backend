const express = require('express');
const app=express()
const router = express.Router();
const path = require('path')
const port = process.env.PORT || 3000;
const host = process.env.HOST
const engine = require('express-handlebars').engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/',(req,res)=>{
    res.render('home')
})
// app.use(express.static(path.join(__dirname,"static")))
// app.get('/',(req,res)=>{
//    res.sendFile()
// })

app.use('/' , require(path.join(__dirname,'routes/blog')))
// app.get('/about',(req,res)=>{
//     res.json({"author":"sahil"})
// })

app.listen(port,()=>{
    console.log(`Started the app on ${host}:${port}/`)
})