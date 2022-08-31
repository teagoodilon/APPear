import productRepository from "../repositories/product.repository.js"
import supplierRepository from "../repositories/supplier.repository.js"


async function createProduct(product){
    const supplier = await supplierRepository.getSupplier(product.supplier_id);
    if (!supplier){
        throw new Error("Supplier inválido!")
    }
    return await productRepository.insertProduct(product)
}

async function getProducts(){
    return await productRepository.getProducts()
}

async function getProduct(id){
    return await productRepository.getProduct(id)
}

async function deleteProduct(id){
    return await productRepository.deleteProduct(id)
}

async function updateProduct(product){
    const supplier = await supplierRepository.getSupplier(product.supplier_id);
    if (!supplier){
        throw new Error("Supplier Id inválido!")
    }
    const produto = await productRepository.getProduct(product.product_id);
    if (!produto){
        throw new Error("Produto Id inválido!")
    }
    return await productRepository.updateProduct(product)
}

export default {
    createProduct, getProducts, getProduct, deleteProduct, updateProduct
}