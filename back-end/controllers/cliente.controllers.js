//recber os dados
//validadar os dados
//chamar o servico
import clienteServices from "../services/cliente.services.js"

async function getCliente(req, res){
    const categoria = req.params.categoria;

    //validar
    
    //chamar servico
    const retorno = await clienteServices.getCliente(categoria)
    console.log(retorno)
    res.send(retorno)
}

async function getClientes(req, res){           
    const retorno = await clienteServices.getClientes() 
    console.log(retorno)
    res.send(retorno)
}

async function updateCliente(req, res){
    const categoria = req.params.categoria
    const novo = req.body

    //validar dados
    if(!novo.categoria || !novo.dataPerca || !novo.descricao || !novo.fotos || !categoria){
        throw Error("FALTA DADO")
    }

    //chamar servico
    const retorno = await clienteServices.updateCliente(categoria, novo)
    res.send(retorno)
    console.log(retorno)
}

async function createCliente(req, res){
    const novo = req.body;
    //validar os dados
    //TO DO

    //chamar servico
    const retorno = await clienteServices.createCliente(novo)    
    console.log(retorno)
    res.send(retorno)
}

async function deleteCliente(req, res){
    const categoria = req.params.categoria;
    
    const retorno = await clienteServices.deleteCliente(categoria)
    console.log(retorno)
    res.send(retorno)
}


export default {
    getCliente,
    getClientes,
    createCliente,
    updateCliente,
    deleteCliente
}