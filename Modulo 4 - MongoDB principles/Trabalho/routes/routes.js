const express = require('express');
const userModel = require('../models/User');
const routes = express();

// Ler usuários
routes.get('/', async (req, res, next) => {
  const user = await userModel.find({});
  res.send(user);
});

// Criar usuário
routes.post('/user', async (req, res, next) => {
  const user = new userModel(req.body);
  await user.save();
});

// Depósito
routes.patch('/user/:id', async (req, res, next) => {
  const user = await userModel.findOneAndModify(
    { _id: req.params.id },
    req.body,
    { new: true }
  );

  res.send(user);
});

routes.delete('/user/:id', async (req, res, next) => {
  const user = await userModel.findOneAndDelete();

  if (!user) {
    res.status(404).send('Usuário não encontrado');
  }

  res.status(200).send();
});

module.exports = routes;
