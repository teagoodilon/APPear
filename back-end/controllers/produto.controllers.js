//recber os dados
//validadar os dados
//chamar o servico
import produtoServices from "../services/produto.services.js"

async function getProduto(req, res){
    const id = req.params.id;

    //validar
    
    //chamar servico
    const retorno = await produtoServices.getProduto(id)
    console.log(retorno)
    res.send(retorno)
}

async function getProdutos(req, res){           
    const retorno = await produtoServices.getProdutos() 
    console.log(retorno)
    res.send(retorno)
}

async function updateProduto(req, res){
    const id = req.params.id
    const novo = req.body

    //validar dados
    if(id == null || id == undefined ||!novo.dataPerca || !novo.valor|| !id){
        throw Error("FALTA DADO")
    }

    //chamar servico
    const retorno = await produtoServices.updateProduto(id, novo)
    res.send(retorno)
    console.log(retorno)
}

async function createProduto(req, res){
    const novo = req.body;
    //validar os dados
    //TO DO

    //chamar servico
    const retorno = await produtoServices.createProduto(novo)    
    console.log(retorno)
    res.send(retorno)
}

async function deleteProduto(req, res){
    const id = req.params.id;
    
    const retorno = await produtoServices.deleteProduto(id)
    console.log(retorno)
    res.send(retorno)
}


export default {
    getProduto,
    getProdutos,
    createProduto,
    updateProduto,
    deleteProduto
}