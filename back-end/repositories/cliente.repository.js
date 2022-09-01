import bd from "./bd.js"

async function getCliente(cpf){
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('SELECT * FROM cliente WHERE cpf =$1',[cpf])//retorno do BD e guarda em uma variavel
        
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

async function updateCliente(cpf, novo){

    const conn = await bd.conectar();
    try{
        let valores = [novo.cpf, novo.nome, novo.nasc, novo.salario, cpf]
        var query = await conn.query('UPDATE cliente SET cpf=$1, nome= $2, nasc = $3, salario= $4 WHERE cpf =$5 RETURNING*', valores)//retorno do BD e guarda em uma variavel
        
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function createCliente(novo){
    
    const conn = await bd.conectar();
    try{
        let valores = [novo.cpf, novo.nome, novo.nasc, novo.salario]
        var query = await conn.query('INSERT INTO cliente (cpf,nome,nasc,salario) VALUES ($1,$2,$3,$4) returning*', valores)//retorno do BD e guarda em uma variavel
        //console.log("========" + JSON.stringify(query.rows))
    }catch(erro){
        console.log(erro)
    }
        
    return query.rows
}

async function deleteCliente(cpf){
    
    const conn = await bd.conectar(); //await = espera o retorno do banco de dados
    try{
        var query = await conn.query('DELETE FROM cliente WHERE cpf =$1 returning*',[cpf])//retorno do BD e guarda em uma variavel
        
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