const mongoose=require('mongoose')
const Receita=require('../models/receitas')

const getAll=(req, res) => {
    //Find sempre retorna uma lista
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

    try{
        
        const tituloId= await Receita.findById(req.params.id)
        console.log(tituloId);
  
        if (tituloId==null){
            return res.status(404).json({ message: "filme não encontrado"})
        }
  
        if(tituloId !=null){
            
            return res.status(200).json(tituloId)
        }
  
        
       }catch(err){
        res.status(500).json({ message:err.message })
  
    }
  
  }

module.exports={
    getAll,
    getById
}