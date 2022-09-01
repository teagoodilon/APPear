import bd from "./bd.js"

async function getCliente(categoria){
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('SELECT * FROM cliente WHERE categoria =$1',[categoria])//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
} 

async function getClientes(){           
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('SELECT * FROM cliente')//retorno do BD e guarda em uma variavel
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function updateCliente(categoria, novo){

    const conn = await bd.conectar();
    try{
        let valores = [novo.categoria, novo.dataPerca, novo.descricao, novo.fotos, categoria]
        var query = await conn.query('UPDATE cliente SET categoria=$1, dataPerca= $2, descricao = $3, fotos= $4 WHERE categoria =$5 RETURNING*', valores)//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function createCliente(novo){
    
    const conn = await bd.conectar();
    try{
        let valores = [novo.categoria, novo.dataPerca, novo.descricao, novo.fotos]
        var query = await conn.query('INSERT INTO cliente (categoria,dataPerca,descricao,fotos) VALUES ($1,$2,$3,$4) returning*', valores)//retorno do BD e guarda em uma variavel
        //console.log("========" + JSON.stringify(query.rows))
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function deleteCliente(categoria){
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('DELETE FROM cliente WHERE categoria =$1 returning*',[categoria])//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

export default {
    getCliente,
    getClientes,
    createCliente,
    updateCliente,
    deleteCliente
}