//receber os dados
//validadar os dados
//chamar o servi
import devolucaoRep from "../repositories/devolucao.repository.js"

async function getDevolucao(itemid){
    const retorno = await devolucaoRep.getDevolucao(itemid);   
    return retorno
} 

async function getDevolucaos(){           
    const retorno = await devolucaoRep.getDevolucaos();   
    return retorno
}

async function updateDevolucao(itemid, novo){

    const retorno = await devolucaoRep.updateDevolucao(itemid,novo);   
    return retorno
}

async function createDevolucao(novo){
    const cliente = await getDevolucao(novo.itemid)

    if(cliente.length > 0){
        throw Error ("ID ja cadastrado")
    }
    const  retorno = await devolucaoRep.createDevolucao(novo);  
    return retorno
}

async function deleteDevolucao(itemid){
    if(itemid == null || itemid == undefined){
        throw Error("Defina um ID para consulta!")//VERIFICAR SE CPF VALIDO
    }
    
    const retorno = await devolucaoRep.deleteDevolucao(itemid);    
    return retorno
}

export default {
    getDevolucao,
    getDevolucaos,
    createDevolucao,
    updateDevolucao,
    deleteDevolucao
}