# CookBook-Minoue
## Sobre o Projeto:

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






## Requisitos:

⭐ "/receitas" Deverá retornar todas as receitas
⭐ "/receitas/{:id}" Deverá retornar as receitas por id
⭐ "/receitas" Deverá cadastrar novas receitas
⭐ "/receitas/{:id}/update" Deverá alterar as receita por id
⭐ "/receitas/{:id}/delete" Deverá deletar as receita por id

Regras de negócio:

✅ Não deverá ser possível criar receita com o mesmo nome

____________________________________
Dados para Collection Receitas
id: autogerado e obrigatório
titulo : texto e obrigatório
criadoEm: data gerada automaticamente e obrigatório
API deve retornar seguinte JSON:

        [
             Receita: {
            
                
                _id: '612fb05536390ee8fabc6d2c',
                titulo: 'FILÉ DE PESCADA FRITA COM SALADINHA DE ERVAS E PURÊ DE ERVILHA',
                categoria: 'peixe',
                ingredientes: '300 g ervilha congelada,1 cebola picada fino,2 colheres (sopa) de manteiga,¼ de xícara (chá) de água,folhas de hortelã lavadas a gosto,sal e pimenta-do-reino moída na hora a gosto',
                modoDePreparo: ' Retire dois filés de peixe do tempero e deixe escorrer o excesso de caldo de limão. Passe pela farinha de trigo, empanando bem dos dois lados - pressione delicadamente com as mãos para a farinha grudar.6. Assim que o óleo estiver quente, coloque delicadamente os filés de peixe empanados. Deixe por cerca de 3 minutos até ficar com a casquinha dourada.',
                observacao: 'Uma delicia',
                fontLink: 'https://www.panelinha.com.br/receita/File-de-pescada-frita-com-saladinha-de-ervas-e-pure-de-ervilha',
                foto: 'sem foto',
                criadoEm: '2021-09-04T16:07:37.421Z'
            }
        ]

_______________________     

Desenvolvida por: Mariana Inoue 
Contato: https://www.linkedin.com/in/mariana-inoue-89279450/

Orientadora: Analu :heart: 

Agradecimento: Equipe Reprograma e Turma On12 :heart: 
