const swaggerAutogen=require('swagger-autogen')()

const outputFile='./src/swagger_output.json'
const endpointFile=['./src/app.js']

const doc={
    info:{

        version:"1.0.0",
        title:"Cookbook-Minoue-Api",
        description:"Api para consumir endepoints relacionados a receitas do caderno de receitas virtual "
    },
    host:"localhost:8080",
    basePath:"/",
    schemes:['http','https'],
    consumes:['application/json'],
    produces:['application/json'],
    tags:[{
            "name":"Receitas",
            "description":"Endpoints relacionados aos recursos do Cookbook "

    }],
    definitions: {
        Receitas: {
            _id: '61354bb8f1df34507398fae4',
            titulo: 'Pão caseiro',
            categoria:'café da manhã',
            ingredientes: 'farinha, água,sal e fermento biológico',
            modoDePreparo: 'Mistura farinha, agua, sal e fermento. Sovar, descansar durante a noite e assar por 50 minutos',
            observacao:'assar na panela',
            fontLink:'https://www.panelinha.com.br/receita/Pao-italiano-caseiro',
            foto:'',
            criadoEm:'2021-09-05T22:04:31.775Z',
            __v: 0

        },
        NovaReceita: {
            $titulo: 'Pure de batata',
            categoria:'acompanhamento',
            $ingredientes: 'batata,mateiga,sal',
            $modoDePreparo: 'Cozinhar batatas, amassar e misturar manteiga e sal',
            observacao:'cozinhar até ficar macias',
            fontLink:'https://www.panelinha.com.br/receita',
            foto:'',
        }
    }
}

swaggerAutogen(outputFile,endpointFile,doc)