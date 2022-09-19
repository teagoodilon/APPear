import bd from "./bd.js"

async function getDevolucao(itemid){
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('SELECT * FROM devolucao WHERE itemid = $1',[itemid])//retorno do BD e guarda em uma variavel
        return query.rows
    }catch(erro){
        console.log(erro)
    }
        
    
} 

async function getDevolucaos(){           
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('SELECT d.itemid, i.categoria, i.descricao, i.data ,d.datadevolucao from item i INNER JOIN devolucao d on d.itemid = i.itemid order by itemid;')//retorno do BD e guarda em uma variavel
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function updateDevolucao(itemid, novo){

    const conn = await bd.conectar();
    try{
        let valores = [novo.data, itemid]
        var query = await conn.query('UPDATE devolucao SET  data= $1 WHERE itemid =$2 RETURNING*', valores)//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function createDevolucao(novo){
    
    const conn = await bd.conectar();

    var date = new Date();
    var dia = String(date.getDate()).padStart(2, '0');
    var mes = String(date.getMonth() + 1).padStart(2, '0');
    var ano = date.getFullYear();
    date = dia + '/' + mes + '/' + ano;
    console.log(date);

    try{
        let valores = [novo.itemid, novo.data, date]
        var query = await conn.query('INSERT INTO devolucao (itemid,datacadastro, dataDevolucao) VALUES ($1,$2,$3) returning*', valores)//retorno do BD e guarda em uma variavel
        //console.log("========" + JSON.stringify(query.rows))
        return query.rows
    }catch(erro){
        console.log(erro)
    }
        
   
}

async function deleteDevolucao(itemid){
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('DELETE FROM devolucao WHERE itemid =$1 returning*',[itemid])//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

export default {
    getDevolucao,
    getDevolucaos,
    createDevolucao,
    updateDevolucao,
    deleteDevolucao
}