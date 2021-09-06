const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Receita=require('../models/receitas')

const deleteReceita= (req, res) => {
     /*
    #swagger.tags = ['Receitas']
    #swagger.description = 'Endpoint para deletar receita por id' 

  
  */
    const requiredId = req.params.id;
    Receita.find({ id: requiredId }, function (err, receita) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            if (receita) {
                
                Receita.deleteOne({ id: requiredId }, function (err) {
                    if (err) {
                        res.status(500).send({
                            message: err.message,
                            status: "FAIL"
                            
                        })
                    } else {
                        res.status(200).send({
                            message: 'removido com sucesso',
                            
                            status: "SUCCESS"
                        })
                    }
                })
            } else {
                res.status(404).send({ message: 'Não pode ser removido com esse id' })
            }
        }
    })
};



module.exports={
    deleteReceita
}