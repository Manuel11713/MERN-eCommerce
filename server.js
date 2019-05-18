require('./config/config');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//Configuracion para conexion frontend-backend
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));




// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
  
const port = process.env.PORT;
app.listen(port,()=>console.log('Escuchando en puerto',port));