const mongoose=require('mongoose')
const Receita=require('../models/diretor')

const updateOne=async(req,res)=>{

    try{
        //tenta encontrar um diretor pelo id 
        const receita= await Receita.findById(req.params.id)

        if (receita==null){
            return res.status(404).json({ message: "receita não encontrada"})
        }

        if(req.body.titulo !=null){
            receita.titulo=req.body.titulo,
            receita.titulo=req.body.titulo,
            receita.titulo=req.body.titulo,
            receita.titulo=req.body.titulo,
            receita.titulo=req.body.titulo,
            receita.titulo=req.body.titulo,
            receita.titulo=req.body.titulo,
            receita.titulo=req.body.titulo,
            receita.titulo=req.body.titulo
        }

        const diretorAtualizado= await diretor.save()
        res.status(200).json(diretorAtualizado)

    }catch(err){
        res.status(500).json({ message:err.message })

    }


}

module.exports={

    updateOne 
}