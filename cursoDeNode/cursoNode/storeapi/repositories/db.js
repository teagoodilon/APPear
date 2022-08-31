import pg from "pg";

async function connect(){
    if (global.connection){
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "postgres://ykhpnhcb:dq23PJXvxT11E8YXTbEdRXoeMfURE8-r@motty.db.elephantsql.com/ykhpnhcb"
    });
    global.connection = pool;
    return pool.connect();
}

export {
    connect
}