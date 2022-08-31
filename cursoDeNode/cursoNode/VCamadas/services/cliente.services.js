import pg from "pg";
import clienteRepository from "../repositories/cliente.repository.js";

//
//FUNCIONALIDADES PARA CLIENTES
//
async function getAllClients(){
	/*const conn = await conectar()
	try{
		var query = await conn.query("SELECT * FROM cliente");
		console.log(query.rows);
	}catch (err){
		console.log(err);
	} finally {
        conn.release();
    }
	return query.rows*/
	return clienteRepository.getAllClients();
}

async function getClient(id){
	/*const id = req.params.id;
	const conn = await conectar()
	try{
		var query = await conn.query("SELECT * FROM cliente WHERE cpf=$1",[req.params.id]);
		console.log(query.rows);
	}catch (err){
		console.log(err);
	} finally {
        conn.release();
    }
	return query.rows*/
	return clienteRepository.getClient(id);

}

async function createClient(novocliente){
	/*const novocliente = req.body;
	const conn = await conectar();
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
	
	return query.rows*/
	
	return clienteRepository.createClient(novocliente);

}

async function deleteClient(id){
	/*const conn = await conectar()
	try{
		var query = await conn.query("DELETE FROM cliente WHERE cpf = $1 RETURNING *",[req.params.id]);
		console.log(query.rows);
	}catch (err){
		console.log(err);
	} finally {
        conn.release();
    }
	return query.rows;*/
	return clienteRepository.deleteClient(id);

}

async function updateClient(id, novocliente){
	/*const novocliente = req.body;

	const conn = await conectar();
    try{
        const sql = "UPDATE cliente SET nome=$1, nasc=$2, salario=$3  WHERE cpf=$4 RETURNING *";
        const values = [novocliente.nome, novocliente.nasc, novocliente.salario, novocliente.cpf ];
        var query = await conn.query(sql, values);
        console.log(query.rows[0]);
    } catch(err){
        throw err;
    } finally {
        conn.release();
    }
	return query.rows[0];*/
	return clienteRepository.updateClient(id, novocliente);

}

export default { 
    getAllClients, getClient, createClient, deleteClient, updateClient
}


