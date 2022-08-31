import SaleService from "../services/sale.service.js"
async function createSale(req, res, next){
    try{
        let sale = req.body;
        if( !sale.client_id || !sale.product_id || !sale.name || 
            !sale.description || !sale.value || !sale.date ){
            throw new Error("Client_id, product_id, name, description, value and date são obrigatórios !")
        }
        sale = await SaleService.createSale(sale);
        res.send(sale);
        logger.info(`POST /sale - ${JSON.stringify(sale)}`);
    }catch(err){
        next(err);
    }
}

async function getSales(req, res, next){
    try{
        // foi passado parametro do produto que se não existir retornará todas as vendas
        // outra alternativa seria criar outra função específica para tratar de getSalesByProductId
        const sale = await SaleService.getSales(req.query.product_id)
        res.send(sale);
        logger.info(`GET ALL /sale - ${JSON.stringify(sale)}`);
    }catch(err){
        next(err);
    }
}

async function getSale(req, res, next){
    try{
        const id = req.params.id;
        const sale = await SaleService.getSale(id)
        res.send(sale);
        logger.info(`GET ONE /sale - ${JSON.stringify(sale)}`);
    }catch(err){
        next(err);
    }
}

async function deleteSale(req, res, next){
    try{
        const id = req.params.id;
        const sale = await SaleService.deleteSale(id)
        res.send(sale);
        logger.info(`DELETE ONE /sale - ${JSON.stringify(sale)}`);
    }catch(err){
        next(err);
    }
}

async function updateSale(req, res, next){
    try{
        let sale = req.body;
        if( !sale.sale_id || !sale.client_id || !sale.product_id || !sale.name || 
            !sale.description || !sale.value || !sale.date ){
            throw new Error("Sale_id, client_id, product_id, name, description, value and date são obrigatórios !")
        }
        sale = await SaleService.updateSale(sale);
        res.send(sale);
        logger.info(`PUT ONE /sale - ${JSON.stringify(sale)}`);
    }catch(err){ 
        next(err);
    }
}


export default { 
    createSale, getSales, getSale, deleteSale, updateSale
}