import pg from "pg";


// BANCO DE DADOS
async function conectarSemPool(){
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
	console.log("POOL  "+pool)
    return pool.connect();
}

export default{
	conectar
}