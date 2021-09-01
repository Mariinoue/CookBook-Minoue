const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Receita=require('../models/receitas')


const createReceita = async (req, res) => {
    const estudio = new Receita({
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
    const estudioJaExiste = await Receita.findOne({titulo: req.body.titulo})
    if (estudioJaExiste) {
      return res.status(409).json({error: 'Receita ja cadastrado.'})
    }
    try{
      const novoEstudio = await estudio.save()
      res.status(201).json(novoEstudio)
    } catch(err) {
      res.status(400).json({ message: err.message})
    }
  }
module.exports={
    createReceita
}