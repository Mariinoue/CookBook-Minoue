const express = require("express");
const router = express.Router();

const controller = require("../controllers/listaReceitas")
const controller2 = require("../controllers/createReceitas")
const controller3 = require("../controllers/deletarReceitas")
const controller4 = require("../controllers/updateReceitas")

router.get('/receitas',controller.getAll);
//router.get("/travels/:id", controller.getTravelById);

router.post("/travels/:id/passenger/create", controller2.createReceita);

//router.delete("/passenger/:id/delete", controller.deletePerson);

//router.put("/passenger/:id/update", controller.updatePerson);

//router.patch("/passenger/:id/updateName", controller.updateName);


module.exports = router;