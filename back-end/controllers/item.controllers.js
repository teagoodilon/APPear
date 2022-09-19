//recber os dados
//validadar os dados
//chamar o servico
import itemServices from "../services/item.services.js"

async function getItem(req, res){
    const itemid = req.params.itemid;

    //validar
    
    //chamar servico
    const retorno = await itemServices.getItem(itemid)
    console.log(retorno)
    res.send(retorno)
}

async function getItems(req, res){           
    const retorno = await itemServices.getItems() 
    console.log(retorno)
    res.send(retorno)
}

async function updateItem(req, res){
    const itemid = req.params.itemid
    const novo = req.body

    //validar dados
    /*if(!novo.status || !novo.categoria || !novo.descricao || !novo.aprovado ||  !itemid ){
        throw Error("FALTA DADO")
    }*/
    //chamar servico
    const retorno = await itemServices.updateItem(itemid, novo)
    
    res.send(retorno)
    console.log(retorno)
}

async function createItem(req, res){
    const novo = req.body;
    //validar os dados
    //TO DO

    //chamar servico
    const retorno = await itemServices.createItem(novo)    
    console.log(retorno)
    res.send(retorno)
}

async function deleteItem(req, res){
    const itemid = req.params.itemid;
    
    const retorno = await itemServices.deleteItem(itemid)
    console.log(retorno)
    res.send(retorno)
}

export default {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem
}