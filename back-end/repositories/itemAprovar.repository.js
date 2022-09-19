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
        var query = await conn.query('SELECT * FROM item where aprovado = false')//retorno do BD e guarda em uma variavel
        return query.rows
    }catch(erro){
        console.log(erro)
    }
    
}

async function updateItem(itemid){

    const conn = await bd.conectar();
    try{
        var aprovado = true;
        let valores = [aprovado, itemid];
        var query = await conn.query('UPDATE item SET aprovado =$1 WHERE itemid=$2 RETURNING*', valores)//retorno do BD e guarda em uma variavel
        
        return query.rows  
    }catch(erro){
        console.log(erro)
    }
}

async function createItem(novo){
    
    const conn = await bd.conectar();
    try{
        var aprovado = false;
        var status = "perdido";
        let valores = [novo.categoria, novo.descricao, novo.data, novo.fotos, status, aprovado]
        var query = await conn.query('INSERT INTO item (categoria,descricao,data, fotos, status,aprovado) VALUES ($1,$2,$3,$4,$5,$6) returning*', valores)//retorno do BD e guarda em uma variavel
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
        return query.rows
    }catch(erro){
        console.log(erro)
    }

}

export default {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem
}