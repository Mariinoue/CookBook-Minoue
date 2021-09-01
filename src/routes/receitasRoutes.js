const express = require("express");
const router = express.Router();

const controller = require("../controllers/listaReceitas")
const controllerCreate = require("../controllers/createReceitas")
const controllerDelete = require("../controllers/deletarReceitas")
const controllerUpdate = require("../controllers/updateReceitas")

router.get('/',controller.getAll);
router.get("/:id", controller.getById);

router.post("/",controllerCreate.createReceita);

router.delete("/:id/delete",controllerDelete.deleteReceita);

router.put("/:id/update",controllerUpdate.update );

module.exports = router;