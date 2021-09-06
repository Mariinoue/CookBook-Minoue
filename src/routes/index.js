const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
     /*
    #swagger.tags = ['Receitas']
    #swagger.description = 'Infos da API' 

  
  */
    response.status(200).json({
        "titulo": "API de Receitas-Cookbook",
        "version": "1.0.0",
        "mensagem": "Enjoy it"
    })
})
module.exports = router