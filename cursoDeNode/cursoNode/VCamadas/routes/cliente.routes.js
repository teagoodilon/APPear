import express from "express";
import cors from "cors";
import clienteController from "../controllers/cliente.controller.js";

const router = express.Router()

// CLIENTE
router.get("/", clienteController.getAllClients);
router.get("/:id", clienteController.getClient);
router.post("/", clienteController.createClient);
router.delete("/:id", clienteController.deleteClient);
router.put("/:id", clienteController.updateClient);

//
//FUNCIONALIDADES PARA CLIENTES
//
async function getAllClients(req, res){
	const conn = await conectar()
	try{
		var query = await conn.query("SELECT * FROM cliente");
		console.log(query.rows);
	}catch (err){
		console.log(err);
	} finally {
        conn.release();
    }
	res.send(query.rows)
}

async function getClient(req, res){
	const id = req.params.id;
	const conn = await conectar()
	try{
		var query = await conn.query("SELECT * FROM cliente WHERE cpf=$1",[req.params.id]);
		console.log(query.rows);
	}catch (err){
		console.log(err);
	} finally {
        conn.release();
    }
	res.send(query.rows)
}

async function createClient(req, res){
	const novocliente = req.body;
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
	
	res.send(query.rows)
}

async function deleteClient(req, res){
	const conn = await conectar()
	try{
		var query = await conn.query("DELETE FROM cliente WHERE cpf = $1 RETURNING *",[req.params.id]);
		console.log(query.rows);
	}catch (err){
		console.log(err);
	} finally {
        conn.release();
    }
	res.send(query.rows)
}

async function updateClient(req, res){
	const novocliente = req.body;

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
	res.send(query.rows[0])
}

// BANCO DE DADOS
async function conectar11(){
	var conString = "postgres://postgres:tonio@localhost:5432/teste";
	var conn = new pg.Client(conString);
    conn.connect();
	return conn
}


async function conectar(){
    if (global.connection){
        return global.connection.connect();
    }

    const pool = await new pg.Pool({
        connectionString: "postgres://postgres:tonio@localhost:5432/teste"
    });
    global.connection = pool;
	console.log("POOL  "+pool)
    return pool.connect();
}


export default router;




