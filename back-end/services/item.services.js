//receber os dados
//validadar os dados
//chamar o servi
import itemRepository from "../repositories/item.repository.js"

async function getItem(itemid){
    const retorno = await itemRepository.getItem(itemid);   
    return retorno
} 

async function getItems(){           
    const retorno = await itemRepository.getItems();   
    return retorno
}

async function updateItem(itemid, novo){

    const retorno = await itemRepository.updateItem(itemid,novo);   
    return retorno
}

async function createItem(novo){
    const cliente = await getItem(novo.itemid)

    if(cliente.length > 0){
        throw Error ("ID ja cadastrado")
    }
    const  retorno = await itemRepository.createItem(novo);  
    return retorno
}

async function deleteItem(itemid){
    if(itemid == null || itemid == undefined){
        throw Error("Defina um CPF para consulta!")//VERIFICAR SE CPF VALIDO
    }
    
    const retorno = await itemRepository.deleteItem(itemid);    
    return retorno
}

export default {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem
}