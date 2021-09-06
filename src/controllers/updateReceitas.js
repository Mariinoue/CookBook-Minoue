const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Receita=require('../models/receitas')

const update =async(req,res)=>{
 /*
    #swagger.tags = ['Receitas']
    #swagger.description = 'Endpoint para alterar receita por id' 

  
  */
    try{
        //tenta encontrar receita pelo id 
        const receita= await Receita.findById(req.params.id)

        if (receita==null){
            return res.status(404).json({ message: "receita não encontrada"})
        }

        if(req.body.titulo !=null){
            receita.titulo=req.body.titulo,
            receita.categoria=req.body.categoria,
            receita.ingredientes=req.body.ingredientes,
            receita.modoDePreparo=req.body.modoDePreparo,
            receita.observacao=req.body.observacao,
            receita.fontLink=req.body.fontLink,
            receita.foto=req.body.foto,
            receita.criadoEm=req.body.criadoEm
        }

        const receitaAtualizada= await receita.save()
        res.status(200).json(receitaAtualizada)

    }catch(err){
        res.status(500).json({ message:err.message })

    }


}

module.exports={

    update 
}