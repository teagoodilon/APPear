import express from "express";
import clienteController     from "../controllers/cliente.controllers.js"

const route = express.Router();

route.get("/", clienteController.getClientes) //req = pacote de info do navegador //res = response(utilize objeto para retorno ou resposta)
route.get("/:cpf", clienteController.getCliente)
route.put("/:cpf", clienteController.updateCliente) 
route.post("/", clienteController.createCliente)
route.delete("/:cpf", clienteController.deleteCliente) 

export default route