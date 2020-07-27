const mongoose = require('mongoose');

// Definindo o modelo da coleção
const userSchema = new mongoose.Schema({
  agencia: { type: Number, required: true },
  conta: { type: Number, required: true },
  name: { type: String, required: true },
  balance: {
    type: Number,
    required: true,
    validade(value) {
      if (value < 0) throw new Error('Valor negativo não é permitido');
    },
  },
});

// Registrando e exportando o model na coleção
const userModel = mongoose.model('collection', userSchema, 'collection');
module.exports = userModel;
