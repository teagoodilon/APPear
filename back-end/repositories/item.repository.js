import bd from "./bd.js"

async function getItem(itemid){
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('SELECT * FROM item WHERE itemid =$1',[itemid])//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
} 

async function getItems(){           
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('SELECT * FROM')//retorno do BD e guarda em uma variavel
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

//ainda nao usado
async function getItemsPerdidos(){           
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query("SELECT * FROM where status = 'perdido'")//retorno do BD e guarda em uma variavel
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

//ainda nao usado
async function getItemsEncontrados(){           
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query("SELECT * FROM where status = 'encontrado'")//retorno do BD e guarda em uma variavel
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}


async function updateItem(itemid, novo){

    const conn = await bd.conectar();
    try{
        let valores = [novo.categoria, novo.descricao, novo.data, novo.fotos, itemid]
        var query = await conn.query('UPDATE item SET  categoria= $1, descricao = $2, data= $3, fotos = $4 WHERE itemid =$4 RETURNING*', valores)//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function createItem(novo){
    
    const conn = await bd.conectar();
    try{
        let valores = [novo.categoria, novo.descricao, novo.data, novo.fotos, novo.status]
        var query = await conn.query('INSERT INTO item (categoria,descricao,data, fotos, status) VALUES ($1,$2,$3,$4,$5) returning*', valores)//retorno do BD e guarda em uma variavel
        //console.log("========" + JSON.stringify(query.rows))
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function deleteItem(itemid){
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('DELETE FROM item WHERE itemid =$1 returning*',[itemid])//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

export default {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem
}