import express from "express";
import casesController     from "../controllers/casesDeSucesso.controllers.js"

const route = express.Router();

route.get("/", casesController.getCases) //req = pacote de info do navegador //res = response(utilize objeto para retorno ou resposta)
route.get("/:itemid", casesController.getCase)
route.put("/:itemid", casesController.updateCase) 
route.post("/", casesController.createCase)
route.delete("/:itemid", casesController.deleteCase) 

export default route