//receber os dados
//validadar os dados
//chamar o servi
import clienteRepository from "../repositories/cliente.repository.js"

async function getCliente(categoria){
    const retorno = await clienteRepository.getCliente(categoria);   
    return retorno
} 

async function getClientes(){           
    const retorno = await clienteRepository.getClientes();   
    return retorno
}

async function updateCliente(categoria, novo){

    const retorno = await clienteRepository.updateCliente(categoria,novo);   
    return retorno
}

async function createCliente(novo){
    const cliente = await getCliente(novo.categoria)

    if(cliente.length > 0){
        throw Error ("categoria ja cadastrado")
    }
    const  retorno = await clienteRepository.createCliente(novo);  
    return retorno
}

async function deleteCliente(categoria){
    if(categoria == null || categoria == undefined){
        throw Error("Defina um categoria para consulta!")//VERIFICAR SE categoria VALIDO
    }
    
    const retorno = await clienteRepository.deleteCliente(categoria);    
    return retorno
}

export default {
    getCliente,
    getClientes,
    createCliente,
    updateCliente,
    deleteCliente
}