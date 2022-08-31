import bd from "./bd.js";

//
//FUNCIONALIDADES PARA CLIENTES
//
async function getAllClients(){
	const conn = await bd.conectar()
	try{
		var query = await conn.query("SELECT * FROM cliente");
		console.log(query.rows);
	}catch (err){
		console.log(err);
	} finally {
        conn.release();
    }
	return query.rows
}

async function getClient(id){
	const conn = await bd.conectar()
	try{
		var query = await conn.query("SELECT * FROM cliente WHERE cpf=$1",[id]);
		console.log(query.rows);
	}catch (err){
		console.log(err);
	} finally {
        conn.release();
    }
	return query.rows
}

async function createClient(novocliente){
	const conn = await bd.conectar();
    try{
        const sql = "INSERT INTO cliente (cpf, nome, nasc, salario) VALUES ($1,$2,$3,$4) RETURNING *";
        const values = [novocliente.cpf, novocliente.nome, novocliente.nasc, novocliente.salario];
        var query = await conn.query(sql, values);
        console.log(query.rows);
    } catch(err){
        throw err;
    } finally {
        conn.release();
    }
	
	return query.rows
}

async function deleteClient(id){
	const conn = await bd.conectar()
	try{
		var query = await conn.query("DELETE FROM cliente WHERE cpf = $1 RETURNING *",[id]);
		console.log(query.rows);
	}catch (err){
		console.log(err);
	} finally {
        conn.release();
    }
	return query.rows;
}

async function updateClient(id, novocliente){
	const conn = await bd.conectar();
    try{
        const sql = "UPDATE cliente SET cpf=$1, nome=$2, nasc=$3, salario=$4  WHERE cpf=$5 RETURNING *";
        const values = [novocliente.cpf, novocliente.nome, novocliente.nasc, novocliente.salario, id ];
        var query = await conn.query(sql, values);
        console.log(query.rows[0]);
    } catch(err){
        throw err;
    } finally {
        conn.release();
    }
	return query.rows[0];
}

export default { 
    getAllClients, getClient, createClient, deleteClient, updateClient
}


