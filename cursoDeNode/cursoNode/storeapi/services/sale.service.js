import saleRepository from "../repositories/sale.repository.js"
import clientRepository from "../repositories/client.repository.js"
import productRepository from "../repositories/product.repository.js"

async function createSale(sale){
    const cliente = await clientRepository.getClient(sale.client_id);
    if (!cliente){
        throw new Error("Client Id inválido!")
    }
    const produto = await productRepository.getProduct(sale.product_id);
    if (!produto){
        throw new Error("Produto Id inválido!")
    }
    if (produto.stock <=0){
        throw new Error("Produto esgotado!")
    }
    sale = await saleRepository.insertSale(sale)
    produto.stock--;
    await productRepository.updateProduct(produto)
    return sale
}

async function getSales(productId){
    if(productId){
        return await saleRepository.getSalesByProductId(productId)
    }
    return await saleRepository.getSales()
}

async function getSale(id){
    return await saleRepository.getSale(id)
}

async function deleteSale(id){
    let sale = await saleRepository.getSale(id)
    if (!sale){
        throw new Error ("Venda não encontrada")
    }

    const produto = await productRepository.getProduct(sale.product_id);
    if (!produto){
        throw new Error("Produto Id inválido na deleção de venda!")
    }

    sale = await saleRepository.deleteSale(id)
    produto.stock++;
    await productRepository.updateProduct(produto)

    return sale
}

async function updateSale(sale){
    
    const venda = await saleRepository.getSale(sale.sale_id);
    if (!venda){
        throw new Error("Sale Id inválido!")
    }
    const cliente = await clientRepository.getClient(sale.client_id);
    if (!cliente){
        throw new Error("Client Id inválido!")
    }
    const produto = await productRepository.getProduct(sale.product_id);
    if (!produto){
        throw new Error("Produto Id inválido!")
    }
    return await saleRepository.updateSale(sale)
}

export default {
    createSale, getSales, getSale, deleteSale, updateSale
}