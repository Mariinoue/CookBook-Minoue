const mongoose = require('mongoose')

const receitaSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  titulo: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  ingredientes: {
    type: String,
    required: true
  },
  modoDePreparo: {
    type: String,
    required: true
  },
  avaliacao: {
    type: String,
    required: true
  },
  observacao: {
    type: String,
    required: true
  },
  fontLink: {
    type: String,
    required: true
  },
  foto: {
    type: String,
    required: true
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  }
})

module.exports = mongoose.model('receita', receitaSchema)