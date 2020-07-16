const express = require('express');
const router = express.Router();

//Rutas
router.get('/', (req, res) => {  //ejemplo con ejs
   res.render('main.ejs');
});

router.get('/responder', (req, res) => {
   res.render('responder.ejs');
});

router.get('/denegado', (req, res) => {
   res.render('denegado.ejs');
});

router.get('/login', (req, res) => {
   res.render('login.ejs');
});

router.get('/registrarse', (req, res) => {
   res.render('registrarse.ejs');
});

module.exports = router;