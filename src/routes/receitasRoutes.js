const express = require("express");
const router = express.Router();

const controller = require("../controllers/listaReceitas")
const controllerCreate = require("../controllers/createReceitas")
const controllerDelete = require("../controllers/deletarReceitas")
const controllerUpdate = require("../controllers/updateReceitas")

router.get('/receita',controller.getAll);
router.get("/receita/:id", controller.getById);

router.post("/receita",controllerCreate.createReceita);

router.delete("/receita/:id/delete",controllerDelete.deleteReceita);

router.put("/receita/:id/update",controllerUpdate.update );

module.exports = router;