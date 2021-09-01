const mongoose=require('mongoose')
const Receitas=require('../models/receitas')

const deleteReceita= (req, res) => {
    const requiredId = req.params.id;
    Receitas.find({ id: requiredId }, function (err, receita) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            if (receita) {
                
                Receitas.deleteOne({ id: requiredId }, function (err) {
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
                res.status(404).send({ message: 'Não  removido com esse id' })
            }
        }
    })
};



module.exports={
    deleteReceita
}