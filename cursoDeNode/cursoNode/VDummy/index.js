import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import pg from "pg";


const app = express();

// converte a requisição em JSON
app.use(express.json())

// faz o parser da requisição para capiturar os dados enviados
app.use(bodyParser.urlencoded({extended : true}))

// permite chamada a partir de outros domínios
app.use(cors())

// CLIENTE
app.get("/client", getAllClients);
app.get("/client/:id", getClient);
app.post("/client", createClient);
app.delete("/client/:id", deleteClient);
app.put("/client/:id", updateClient);

// PRODUTOS
app.get("/product", getAllProducts);
app.get("/product/:id", getProduct);
app.post("/product", createProduct);
app.delete("/product/:id", deleteProduct);
app.put("/product/:id", updateProduct);

// VENDA
app.get("/sale", getAllSales);
app.get("/sale/:id", getSale);
app.post("/sale", createSale);
app.delete("/sale/:id", deleteSale);
app.put("/sale/:id", updateSale);

app.listen(3000, ()=>{console.log("servidor rodando!!!")})


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

//
//FUNCIONALIDADES PARA PRODUTOS
//
function getAllProducts(req, res){
	res.send("getAllProducts funcionando!!!")
}

function getProduct(req, res){
	res.send("getProduct "+req.params.id)
}

function createProduct(req, res){
	const novoprod = req.body;
	console.log(novoprod)
	res.send("createProduct cpf:" + novoprod.cpf + "  nome:" + novoprod.nome+"   Salário:"+novoprod.salario)
}

function deleteProduct(req, res){
	res.send("deleteProduct " + req.params.id)
}

function updateProduct(req, res){
	const novoprod = req.body;
	console.log(novoprod)
	res.send("updateProduct " + req.params.id + "  pelos dados nome:" + novoprod.nome+"   Salário:"+novoprod.salario)
}


//
//FUNCIONALIDADES PARA VENDAS
//
function getAllSales(req, res){
	res.send("getAllSales funcionando!!!")
}

function getSale(req, res){
	res.send("getSale "+req.params.id)
}

function createSale(req, res){
	const novosale = req.body;
	console.log(novosale)
	res.send("createSale cpf:" + novosale.cpf + "  nome:" + novosale.nome+"   Salário:"+novosale.salario)
}

function deleteSale(req, res){
	res.send("deleteSale " + req.params.id)
}

function updateSale(req, res){
	const novosale = req.body;
	console.log(novosale)
	res.send("updateSale " + req.params.id + "  pelos dados nome:" + novosale.nome+"   Salário:"+novosale.salario)
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

    const pool = new pg.Pool({
        connectionString: "postgres://postgres:tonio@localhost:5432/teste"
    });
    global.connection = pool;
    return pool.connect();
}






