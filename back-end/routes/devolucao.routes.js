import express from "express";
import devolucaoController    from "../controllers/devolucao.controllers.js"

const route = express.Router();

route.get("/", devolucaoController.getDevolucaos) //req = pacote de info do navegador //res = response(utilize objeto para retorno ou resposta)
route.get("/:itemid", devolucaoController.getDevolucao)
route.put("/:itemid", devolucaoController.updateDevolucao) 
route.post("/", devolucaoController.createDevolucao)
route.delete("/:itemid", devolucaoController.deleteDevolucao) 

export default route