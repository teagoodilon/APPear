//recber os dados
//validadar os dados
//chamar o servico
import devolucao from "../services/devolucao.services.js"

async function getDevolucao(req, res){
    const itemid = req.params.itemid;

    //validar
    
    //chamar servico
    const retorno = await devolucao.getDevolucao(itemid)
    console.log(retorno)
    res.send(retorno)
}

async function getDevolucaos(req, res){           
    const retorno = await devolucao.getDevolucaos() 
    console.log(retorno)
    res.send(retorno)
}

async function updateDevolucao(req, res){
    const itemid = req.params.itemid
    const novo = req.body

    //validar dados
    if(!novo.data || !itemid){
        throw Error("FALTA DADO")
    }

    //chamar servico
    const retorno = await devolucao.updateDevolucao(itemid, novo)
    res.send(retorno)
    console.log(retorno)
}

async function createDevolucao(req, res){
    const novo = req.body;
    //validar os dados
    //TO DO

    //chamar servico
    const retorno = await devolucao.createDevolucao(novo)    
    console.log(retorno)
    res.send(retorno)
}

async function deleteDevolucao(req, res){
    const itemid = req.params.itemid;
    
    const retorno = await devolucao.deleteDevolucao(itemid)
    console.log(retorno)
    res.send(retorno)
}


export default {
    getDevolucao,
    getDevolucaos,
    createDevolucao,
    updateDevolucao,
    deleteDevolucao
}