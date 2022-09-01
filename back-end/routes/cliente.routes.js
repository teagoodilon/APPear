import express from "express";
import clienteController     from "../controllers/cliente.controllers.js"

const route = express.Router();

route.get("/", clienteController.getClientes) //req = pacote de info do navegador //res = response(utilize objeto para retorno ou resposta)
route.get("/:categoria", clienteController.getCliente)
route.put("/:categoria", clienteController.updateCliente) 
route.post("/", clienteController.createCliente)
route.delete("/:categoria", clienteController.deleteCliente) 

export default route