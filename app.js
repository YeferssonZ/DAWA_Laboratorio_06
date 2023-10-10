const express = require('express');
const path = require('path');

// Crear instancias de Express
const appEJS = express();
const appPug = express();

// Configurar el motor de vistas para EJS
appEJS.set('view engine', 'ejs');
appEJS.set('views', path.join(__dirname, 'views'));

// Configurar el motor de vistas para Pug
appPug.set('view engine', 'pug');
appPug.set('views', path.join(__dirname, 'views'));

// Middleware para archivos estáticos
appEJS.use(express.static('public'));
appPug.use(express.static('public'));

const bodyParser = require('body-parser');

// Configurar bodyParser para appEJS
appEJS.use(bodyParser.urlencoded({ extended: true }));
appEJS.use(bodyParser.json());

// Configurar bodyParser para appPug
appPug.use(bodyParser.urlencoded({ extended: true }));
appPug.use(bodyParser.json());


const portEJS = 3000;
const portPug = 3001;

// Configuración de rutas para EJS
appEJS.get('/', (req, res) => {
    res.render('ejs/index');
});

appEJS.get('/sobre_mi', (req, res) => {
    res.render('ejs/sobre_mi');
});

appEJS.get('/experiencia', (req, res) => {
    res.render('ejs/experiencia');
});

appEJS.get('/educacion', (req, res) => {
    res.render('ejs/educacion');
});

appEJS.get('/habilidades', (req, res) => {
    res.render('ejs/habilidades');
});

appEJS.get('/proyectos', (req, res) => {
    res.render('ejs/proyectos');
});

appEJS.get('/contactame', (req, res) => {
    res.render('ejs/contactame');
});

appEJS.get('/confirmacion', (req, res) => {
    res.render('ejs/confirmacion');
});

appEJS.post('/contacto', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    res.redirect('/confirmacion');
});

// Rutas para Pug

appPug.get('/', (req, res) => {
    res.render('pug/index');
});

appPug.get('/sobre_mi_pug', (req, res) => {
    res.render('pug/sobre_mi');
});
  
appPug.get('/experiencia_pug', (req, res) => {
    res.render('pug/experiencia');
});
  
appPug.get('/educacion_pug', (req, res) => {
    res.render('pug/educacion');
});
  
appPug.get('/habilidades_pug', (req, res) => {
    res.render('pug/habilidades');
});
  
appPug.get('/proyectos_pug', (req, res) => {
    res.render('pug/proyectos');
});
  
appPug.get('/contactame_pug', (req, res) => {
    res.render('pug/contactame');
});

appPug.get('/confirmacion', (req, res) => {
    res.render('pug/confirmacion');
});

appPug.post('/contacto', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    res.redirect('/confirmacion');
});

// Iniciar los servidores
appEJS.listen(portEJS, () => {
    console.log(`Servidor EJS en ejecución en el puerto ${portEJS}`);
});

appPug.listen(portPug, () => {
    console.log(`Servidor Pug en ejecución en el puerto ${portPug}`);
});
