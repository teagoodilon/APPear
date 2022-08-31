import {connect} from "./db.js";

async function insertProduct(product){
    const conn = await connect();
    // throw new Error("aaaa");
    try{
        const sql = "INSERT INTO products (supplier_id, name, description, value, stock) VALUES ($1,$2,$3,$4,$5) RETURNING *";
        const values = [product.supplier_id, product.name, product.description, product.value, product.stock];
    
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch(err){
        throw err;
    } finally {
        conn.release();
    }
    
}

async function getProducts(){
    const conn = await connect();
    try{
        const sql = "SELECT * FROM products";
        const res = await conn.query(sql);
        return res.rows;
        
    } catch(err){
        throw err;
    } finally {
        conn.release();
    } 
}

async function getProduct(id){
    const conn = await connect();
    try{
        const sql = "SELECT * FROM products WHERE product_id = $1";
        const values = [id];
        const res = await conn.query(sql, values);
        return res.rows[0];
        
    } catch(err){
        throw err;
    } finally {
        conn.release();
    }  
}

async function deleteProduct(id){
    const conn = await connect();
    try{
        const sql = "DELETE FROM products WHERE product_id = $1 RETURNING *";
        const values = [id];
        const res = await conn.query(sql, values);
        return res.rows[0];
        
    } catch(err){
        throw err;
    } finally {
        conn.release();
    } 
}

async function updateProduct(product){
    const conn = await connect();
    try{
        const sql = "UPDATE products SET supplier_id=$1, name=$2, description=$3, value=$4, stock=$5  WHERE product_id=$6 RETURNING *";
        const values = [product.supplier_id, product.name, product.description, product.value, product.stock, product.product_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch(err){
        throw err;
    } finally {
        conn.release();
    }
}

export default{
    insertProduct, getProducts, getProduct, deleteProduct, updateProduct
}