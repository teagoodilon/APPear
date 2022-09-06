import bd from "./bd.js"

async function getCase(itemid){
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('SELECT * FROM casesdesucesso WHERE itemid =$1',[itemid])//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
} 

async function getCases(){           
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('SELECT * FROM')//retorno do BD e guarda em uma variavel
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function updateCase(itemid, novo){

    const conn = await bd.conectar();
    try{
        let valores = [novo.data, itemid]
        var query = await conn.query('UPDATE casesdesucesso SET  data= $1 WHERE itemid =$2 RETURNING*', valores)//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function createCase(novo){
    
    const conn = await bd.conectar();
    try{
        let valores = [novo.itemid, novo.data]
        var query = await conn.query('INSERT INTO casesdesucesso (itemid,data) VALUES ($1,$2) returning*', valores)//retorno do BD e guarda em uma variavel
        //console.log("========" + JSON.stringify(query.rows))
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function deleteCase(itemid){
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('DELETE FROM casesdesucesso WHERE itemid =$1 returning*',[itemid])//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

export default {
    getCase,
    getCases,
    createCase,
    updateCase,
    deleteCase
}