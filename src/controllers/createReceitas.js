const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Receita=require('../models/receitas')
const cors=require('cors')

const createReceita = async (req, res) => {
      /*
      #swagger.tags = ['Receitas']
      #swagger.description = 'Endpoint para criar uma receita'
      #swagger.parameters['NovaReceita'] = {
        in: 'body',
        description: 'Informações da receita',
        required: true,
        type: 'object',
        schema: { $ref: '#/definitions/NovaReceita'}
      }
      #swager.responses[201] = {
        description: 'Receita criada com sucesso'
      }
      #swagger.responses[400] = {
        description: 'Titulo e ingredientes são obrigatórios'
      }
    */
    const receita = new Receita({
      _id: new mongoose.Types.ObjectId(),
      titulo: req.body.titulo,
        categoria: req.body.categoria,
        ingredientes: req.body.ingredientes,
        modoDePreparo: req.body.modoDePreparo,
        observacao: req.body.observacao,
        fontLink: req.body.fontLink,
        foto: req.body.foto,
      criadoEm: req.body.criadoEm,
    })
    const receitaJaExiste = await Receita.findOne({titulo: req.body.titulo})
    if (receitaJaExiste) {
      return res.status(409).json({error: 'Receita ja cadastrada.'})
    }
    try{
      const novoReceita = await receita.save()
      res.status(201).json(novoReceita)
    } catch(err) {
      res.status(400).json({ message: err.message})
    }
  }
module.exports={
    createReceita
}