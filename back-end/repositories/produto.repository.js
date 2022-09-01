import bd from "./bd.js"

async function getProduto(id){
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('SELECT * FROM produto WHERE id =$1',[id])//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
} 

async function getProdutos(){           
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('SELECT * FROM produto')//retorno do BD e guarda em uma variavel
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function updateProduto(id, novo){

    const conn = await bd.conectar();
    try{
        let valores = [novo.id, novo.dataPerca, novo.valor, id]
        var query = await conn.query('UPDATE produto SET id=$1, dataPerca= $2, valor = $3 WHERE id =$4 RETURNING*', valores)//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function createProduto(novo){
    
    const conn = await bd.conectar();
    try{
        let valores = [novo.id, novo.dataPerca,novo.valor]
        var query = await conn.query('INSERT INTO produto (id,dataPerca,valor) VALUES ($1,$2,$3) returning*', valores)//retorno do BD e guarda em uma variavel
        //console.log("========" + JSON.stringify(query.rows))
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function deleteProduto(id){
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('DELETE FROM produto WHERE id =$1 returning*',[id])//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

export default {
    getProduto,
    getProdutos,
    createProduto,
    updateProduto,
    deleteProduto
}