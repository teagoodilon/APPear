//receber os dados
//validadar os dados
//chamar o servi
import clienteRepository from "../repositories/cliente.repository.js"

async function getCliente(cpf){
    const retorno = await clienteRepository.getCliente(cpf);   
    return retorno
} 

async function getClientes(){           
    const retorno = await clienteRepository.getClientes();   
    return retorno
}

async function updateCliente(cpf, novo){

    const retorno = await clienteRepository.updateCliente(cpf,novo);   
    return retorno
}

async function createCliente(novo){
    const cliente = await getCliente(novo.cpf)

    if(cliente.length > 0){
        throw Error ("CPF ja cadastrado")
    }
    const  retorno = await clienteRepository.createCliente(novo);  
    return retorno
}

async function deleteCliente(cpf){
    if(cpf == null || cpf == undefined){
        throw Error("Defina um CPF para consulta!")//VERIFICAR SE CPF VALIDO
    }
    
    const retorno = await clienteRepository.deleteCliente(cpf);    
    return retorno
}

export default {
    getCliente,
    getClientes,
    createCliente,
    updateCliente,
    deleteCliente
}