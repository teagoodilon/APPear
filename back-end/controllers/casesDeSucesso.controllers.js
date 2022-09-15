//recber os dados
//validadar os dados
//chamar o servico
import casesDeSucesso from "../services/casesDeSucesso.services.js"

async function getcase(req, res){
    const itemid = req.params.itemid;

    //validar
    
    //chamar servico
    const retorno = await casesDeSucesso.getcase(itemid)
    console.log(retorno)
    res.send(retorno)
}

async function getcases(req, res){           
    const retorno = await casesDeSucesso.getcases() 
    console.log(retorno)
    res.send(retorno)
}

async function updateCase(req, res){
    const itemid = req.params.itemid
    const novo = req.body

    //validar dados
    if(!novo.data || !itemid){
        throw Error("FALTA DADO")
    }

    //chamar servico
    const retorno = await casesDeSucesso.updateCase(itemid, novo)
    res.send(retorno)
    console.log(retorno)
}

async function createCase(req, res){
    const novo = req.body;
    //validar os dados
    //TO DO

    //chamar servico
    const retorno = await casesDeSucesso.createCase(novo)    
    console.log(retorno)
    res.send(retorno)
}

async function deleteCase(req, res){
    const itemid = req.params.itemid;
    
    const retorno = await casesDeSucesso.deleteCase(itemid)
    console.log(retorno)
    res.send(retorno)
}


export default {
    getcase,
    getcases,
    createCase,
    updateCase,
    deleteCase
}