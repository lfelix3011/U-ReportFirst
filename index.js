const express = require('express');
// const morgan = require('morgan');
const app = express();

//Para buscar las views
const path = require('path');
const views = path.join(__dirname, '/views');

//para traer las img y css y js de front
const public = path.join(__dirname, '/public');

//Requiriendo rutas
const route = require('./route');


//setting
app.set('appName', 'Mi primer server');
app.set('views', views); //buscando las vistas con ejs
app.set('view engine', 'ejs');

//Middleware
app.use(express.static(public));
// app.use(morgan('combined'));

//  app.use((req, res, next)=>{
//  console.log('requestin url:' + req.url);
// next();
// });

//Rutas
app.use(route);


//si no encuentra ninguna ruta
app.get('*', (req, res) => {
   res.render('404.ejs')
});

app.listen(3000, () => {
   console.log('Servidor Funcionando');
   console.log('Nombre de la app: ' + app.get('appName'));
});

