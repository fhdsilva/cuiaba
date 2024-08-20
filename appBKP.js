const express = require('express'); //rotas
const exphbs = require("express-handlebars"); // handleBars
const app = express(); //objeto de rota
const path = require('path')
const db = require('./db/conect'); //dbConect
const bodyParser = require('body-parser'); //body-parser

const PORT = 3000;
app.listen(PORT, function(){
    console.log(`O express está rodando na porta ${PORT}`);
});

//bodyParesr
app.use(bodyParser.urlencoded({extended: false}));

//handleBars
app.set('views', path.join(__dirname, 'views'));
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

//Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Conect db<<<<<<
db
    .authenticate()
    .then(()=>{
        console.log('Conectado com sucesso');
    })
    .catch(err=>{
        console.log('erro',err)
    })

//routes
app.get('/',(req,res)=>{
    res.render('index' );
});

app.use('/jobs', require('./routes/jobs'));