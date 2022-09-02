import pg from "pg";

async function conectar(){
    const pool = new pg.Pool({
        //connectionString: "postgres://1610:postgress@localhost:5432/teste"
        host: 'localhost',
        user: 'postgres',
        password:'1610',
        database:'appear',
        port: 5432
    })
    return pool.connect();
}

export default {
    conectar
}