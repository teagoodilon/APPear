//receber os dados
//validadar os dados
//chamar o servi
import casesRepository from "../repositories/casesDeSucesso.repository.js"

async function getCase(itemid){
    const retorno = await casesRepository.getCase(itemid);   
    return retorno
} 

async function getCases(){           
    const retorno = await casesRepository.getCases();   
    return retorno
}

async function updateCase(itemid, novo){

    const retorno = await casesRepository.updateCase(itemid,novo);   
    return retorno
}

async function createCase(novo){
    const cliente = await getCase(novo.itemid)

    if(cliente.length > 0){
        throw Error ("ID ja cadastrado")
    }
    const  retorno = await casesRepository.createCase(novo);  
    return retorno
}

async function deleteCase(itemid){
    if(itemid == null || itemid == undefined){
        throw Error("Defina um ID para consulta!")//VERIFICAR SE CPF VALIDO
    }
    
    const retorno = await casesRepository.deleteCase(itemid);    
    return retorno
}

export default {
    getCase,
    getCases,
    createCase,
    updateCase,
    deleteCase
}