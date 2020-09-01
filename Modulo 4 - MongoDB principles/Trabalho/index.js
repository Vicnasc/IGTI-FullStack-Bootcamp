// Importando o mongoose e express
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

// Iniciando o app
const app = express();

app.use(express.json());
app.use(routes);

// Conectando o database
mongoose.connect('mongodb://localhost:27017/database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
});

// Checando se ocorreu erro na execução do DB

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('Connected');
});

app.listen(3000, () => console.log('API funcionando!'));
