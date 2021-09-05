const express=require('express')
const app=express()
const cors=require('cors')



const db = require('../src/database/database')
db.connect()
app.use(express.json())
app.use(cors())

const index=require("./routes/index")
app.use("/",index)

const routes=require("./routes/receitasRoutes")
app.use("/receita",routes)


module.exports=app