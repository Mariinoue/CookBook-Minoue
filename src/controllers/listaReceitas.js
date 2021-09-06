const mongoose=require('mongoose')
const Receita=require('../models/receitas')
const express=require('express')
const app=express()
const cors=require('cors')

const getAll=(req, res) => {
  /*
    #swagger.tags = ['Receitas']
    #swagger.description = 'Endpoint parra obter uma lista de receitas' 
    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Receitas"},
      description: 'Produto encontrado'
    }
    #swagger.responses[204] = {
      description: 'Produto não encontrado'
    }
    #swagger.responses[500] = {
      description: 'Desculpe, tivemos um problema com a requisição'
    }
  */
 
    Receita.find(function (err, receitaFound) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            if (receitaFound && receitaFound.length > 0) {
                res.status(200).send(receitaFound);
            } else {
                res.status(204).send();
            }
        }
    })
};

const getById=async(req,res)=>{
 /*
    #swagger.tags = ['Receitas']
    #swagger.description = 'Endpoint para obter receita por id' 

  
  */
    try{
        
        const receitaId= await Receita.findById(req.params.id)
        console.log(receitaId);
  
        if (receitaId==null){
            return res.status(404).json({ message: "Desculpe,receita não encontrado"})
        }
  
        if(receitaId !=null){
            
            return res.status(200).json(receitaId)
        }
  
        
       }catch(err){
        res.status(500).json({ message:err.message })
  
    }
  
  }

module.exports={
    getAll,
    getById
}