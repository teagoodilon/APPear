//receber os dados
//validadar os dados
//chamar o servi
import produtoRepository from "../repositories/produto.repository.js"

async function getProduto(id){
    const retorno = await produtoRepository.getProduto(id);   
    return retorno
} 

async function getProdutos(){           
    const retorno = await produtoRepository.getProdutos();   
    return retorno
}

async function updateProduto(id, novo){

    const retorno = await produtoRepository.updateProduto(id,novo);   
    return retorno
}

async function createProduto(novo){
    const produto = await getProduto(novo.id)

    if(produto.length > 0){
        throw Error ("ID ja cadastrado")
    }
    const  retorno = await produtoRepository.createProduto(novo);  
    return retorno
}

async function deleteProduto(id){
    if(id == null || id == undefined){
        throw Error("Defina um ID para consulta!")//VERIFICAR SE categoria VALIDO
    }
    
    const retorno = await produtoRepository.deleteProduto(id);    
    return retorno
}

export default {
    getProduto,
    getProdutos,
    createProduto,
    updateProduto,
    deleteProduto
}