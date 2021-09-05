# CookBook-Minoue
## Sobre o Projeto:

## Requisitos:

CookBook é um Caderno de receitas virtual. Solução pensada para pessoas que cozinham em casa.
No periodo da pandemia entre 2020 e 2021, foi observado o aumento de pessoas que mudaram de hábitos, 
como por exemplo introduziram o ato de cozinhar em seu cotidiano. 
Cozinhar traz muitos benefícios a essas pessoas. Por exemplo: consumo de alimento considerados saúdaveis,
bem estar mental, diminuição de chance obesidade. 

O usuário poderá:
- cadastrar suas receitas favoritas
- buscar as receita no DB
- modificar algumas informação
- deletar alguma receita

_______________________________
Tecnologias que vamos usar:

|Ferramenta |	Descrição |
|-|-|
| javascript |	Linguagem de programação
|nodejs	| Ambiente de execução do javascript
|express	|Framework NodeJS
|mongoose|	Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections
|nodemon	|Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente
|npm |Gerenciador de pacotes
|MongoDb	|Banco de dado não relacional orietado a documentos
|Robo 3T	|Interface gráfica para verificar se os dados foram persistidos
|Postman	|Interface gráfica para realizar os testes

## Essa é uma API para endpoints de acesso a informações do produto.

![Captura de tela 2021-09-05 104916](https://user-images.githubusercontent.com/82849390/132129351-737c1a23-2266-48ed-8f63-be4e9fe65ae6.png)

__________________________


       📁 Arquitetura
        📁 cookbook
          |
          |-  📁 src
          |    |
          |    |- 📁 data
          |         |- 📄 database.js
          |
          |    |- 📁 controllers
          |         |- 📄 listaReceitas.js
          |         |- 📄 createReceitas.js
          |         |- 📄 updateReceitas.js
          |         |- 📄 deletarReceitas.js
          |         
          |
          |    |- 📁 models
          |         |- 📄 receitasjs
          |       
          |
          |    |- 📁 routes
          |         |- 📄 receitasRoutes.js 
          |       
          |
          |- 📄 package-lock.json
          |- 📄 node_modules
          |- 📄 .gitignore
          |- 📄 package.json
          |- 📄 server.js






[Go to my mark](#Requisitos:)

⭐ "/titulos/akira" Deverá retornar todos os títulos com o diretor Akira Kurosawa



Regras de negócio:

✅ Não deverá ser possível criar estudio com o mesmo nome,

✅Não deverá ser possível criar título com o mesmo nome,

✅Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema, utilizando o numero do id do estudio correspondente no corpo da requisição

____________________________________
Dados para Collection Receitas
id: autogerado e obrigatório
nome: texto e obrigatório
criadoEm: data gerada automaticamente e obrigatório
API deve retornar seguinte JSON:

        [
            {
            "_id" : ObjectId("6115565d9b82f148cc825871"),
            "criadoEm" : ISODate("2021-08-12T17:04:39.767Z"),
            "nome" : "Akira Kurosawa",
            "__v" : 0
            }
        ]
___________

Dados para Collection Titulos
id: autogerado e obrigatório
nome: texto e obrigatório
genero: texto e obrigatório
descricao: texto e obrigatório
criadoEm: data gerada automaticamente e obrigatório
estudio: referencia do estudio cadastrado previamente obrigatório
API deve retornar seguinte JSON:


_______________________     

Desenvolvida por: Mariana Inoue 
Contato: https://www.linkedin.com/in/mariana-inoue-89279450/

Orientadora: Analu :heart: 

Agradecimento: Equipe Reprograma e Turma On12 :heart: 
