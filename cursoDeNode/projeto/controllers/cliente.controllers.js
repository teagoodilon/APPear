//recber os dados
//validadar os dados
//chamar o servico
import clienteServices from "../services/cliente.services.js"

async function getCliente(req, res){
    const cpf = req.params.cpf;

    //validar
    
    //chamar servico
    const retorno = await clienteServices.getCliente(cpf)
    console.log(retorno)
    res.send(retorno)
}

async function getClientes(req, res){           
    const retorno = await clienteServices.getClientes() 
    console.log(retorno)
    res.send(retorno)
}

async function updateCliente(req, res){
    const cpf = req.params.cpf
    const novo = req.body

    //validar dados
    if(!novo.cpf || !novo.nome || !novo.nasc || !novo.salario || !cpf){
        throw Error("FALTA DADO")
    }

    //chamar servico
    const retorno = await clienteServices.updateCliente(cpf, novo)
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
    const cpf = req.params.cpf;
    
    const retorno = await clienteServices.deleteCliente(cpf)
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