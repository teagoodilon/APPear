import bd from "./bd.js"

async function getCase(itemid){
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('SELECT * FROM cases WHERE itemid = $1',[itemid])//retorno do BD e guarda em uma variavel
        return query.rows
    }catch(erro){
        console.log(erro)
    }
        
    
} 

async function getCases(){           
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('SELECT c.itemid, i.categoria, i.descricao, c.dataCase from item i INNER JOIN cases c on c.itemid = i.itemid order by itemid;')//retorno do BD e guarda em uma variavel
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function updateCase(itemid, novo){

    const conn = await bd.conectar();
    try{
        let valores = [novo.data, itemid]
        var query = await conn.query('UPDATE cases SET  data= $1 WHERE itemid =$2 RETURNING*', valores)//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function createCase(novo){
    
    const conn = await bd.conectar();

    var date = new Date();
    var dia = String(date.getDate()).padStart(2, '0');
    var mes = String(date.getMonth() + 1).padStart(2, '0');
    var ano = date.getFullYear();
    date = dia + '/' + mes + '/' + ano;
    console.log(date);

    try{
        let valores = [novo.itemid, date]
        var query = await conn.query('INSERT INTO cases (itemid,dataCase) VALUES ($1,$2) returning*', valores)//retorno do BD e guarda em uma variavel
        //console.log("========" + JSON.stringify(query.rows))
        return query.rows
    }catch(erro){
        console.log(erro)
    }
        
   
}

async function deleteCase(itemid){
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('DELETE FROM cases WHERE itemid =$1 returning*',[itemid])//retorno do BD e guarda em uma variavel
        
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