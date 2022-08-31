import express from "express";
import produtoController  from "../controllers/produto.controllers.js"

const route = express.Router();

route.get("/", produtoController.getProdutos) //req = pacote de info do navegador //res = response(utilize objeto para retorno ou resposta)
route.get("/:id", produtoController.getProduto)
route.put("/:id", produtoController.updateProduto) 
route.post("/", produtoController.createProduto)
route.delete("/:id", produtoController.deleteProduto) 

export default route