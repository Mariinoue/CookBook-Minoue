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


module.exports={
    getAll
}