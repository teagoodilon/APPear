import express from "express";
import itemController     from "../controllers/itemAprovar.controllers.js"

const route = express.Router();

route.get("/", itemController.getItems) //req = pacote de info do navegador //res = response(utilize objeto para retorno ou resposta)
route.get("/:itemid", itemController.getItem)
route.put("/:itemid", itemController.updateItem) 
route.post("/", itemController.createItem)
route.delete("/:itemid", itemController.deleteItem) 

export default route