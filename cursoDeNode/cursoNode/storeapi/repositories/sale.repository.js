import {connect} from "./db.js";

async function insertSale(sale){
    const conn = await connect();
    // throw new Error("aaaa");
    try{
        const sql = "INSERT INTO sales (client_id, product_id, name, description,value, date) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *";
        const values = [sale.client_id, sale.product_id, sale.name, sale.description, sale.value, sale.date];
    
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch(err){
        throw err;
    } finally {
        conn.release();
    }
    
}


async function getSalesByProductId(productId){
    const conn = await connect();
    try{
        console.log("productID "+productId)
        const sql = "SELECT * FROM sales where sales.product_id = $1";
        // se fossem vários produtos id retornados numa consulta
        // poderia-se fazer 
        // const inClause = ids.map(id=>"'"+id+"'").join();
        // const query =  `SELECT * FROM docs d WHERE d.id IN (${inClause})`;
        const values = [productId]
        const res = await conn.query(sql, values);
        return res.rows;
        
    } catch(err){
        throw err;
    } finally {
        conn.release();
    } 
}

async function getSales(){
    const conn = await connect();
    try{
        const sql = "SELECT * FROM sales";
        const res = await conn.query(sql);
        return res.rows;
        
    } catch(err){
        throw err;
    } finally {
        conn.release();
    } 
}

async function getSale(id){
    const conn = await connect();
    try{
        const sql = "SELECT * FROM sales WHERE sales_id = $1";
        const values = [id];
        const res = await conn.query(sql, values);
        return res.rows[0];
        
    } catch(err){
        throw err;
    } finally {
        conn.release();
    }  
}

async function deleteSale(id){
    const conn = await connect();
    try{
        const sql = "DELETE FROM sales WHERE sales_id = $1 RETURNING *";
        const values = [id];
        const res = await conn.query(sql, values);
        return res.rows[0];
        
    } catch(err){
        throw err;
    } finally {
        conn.release();
    } 
}

async function updateSale(sale){
    const conn = await connect();
    try{
        const sql = "UPDATE sales SET client_id=$1, product_id=$2, name=$3, description=$4, value=$5, date=$6  WHERE sales_id=$7 RETURNING *";
        const values = [sale.client_id, sale.product_id, sale.name, sale.description, sale.value, sale.date, sale.sale_id];

        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch(err){
        throw err;
    } finally {
        conn.release();
    }
}

export default{
    insertSale, getSales, getSale, deleteSale, updateSale, getSalesByProductId
}