import ProductService from "../services/product.service.js"
async function createProduct(req, res, next){
    try{
        let product = req.body;
        if( !product.supplier_id || !product.name || !product.description || 
            !product.value || !product.stock ){
            throw new Error("Suppllier_id, name, description, value, stock são obrigatórios !")
        }
        product = await ProductService.createProduct(product);
        res.send(product);
        logger.info(`POST /product - ${JSON.stringify(product)}`);
    }catch(err){
        next(err);
    }
}

async function getProducts(req, res, next){
    try{
        
        res.send(await ProductService.getProducts());
        logger.info(`GET ALL /product - ${JSON.stringify(product)}`);
    }catch(err){
        next(err);
    }
}

async function getProduct(req, res, next){
    try{
        const id = req.params.id;
        res.send(await ProductService.getProduct(id));
        logger.info(`GET ONE /product - ${JSON.stringify(product)}`);
    }catch(err){
        next(err);
    }
}

async function deleteProduct(req, res, next){
    try{
        const id = req.params.id;
        res.send(await ProductService.deleteProduct(id));
        logger.info(`DELETE ONE /product - ${JSON.stringify(product)}`);
    }catch(err){
        next(err);
    }
}

async function updateProduct(req, res, next){
    try{
        let product = req.body;
        if(!product.product_id || !product.supplier_id || !product.name || 
            !product.description || !product.value || !product.stock ){
            throw new Error("Product_id, suppllier_id, name, description, value, stock são obrigatórios !")
        }
        product = await ProductService.updateProduct(product);
        res.send(product);
        logger.info(`PUT ONE /product - ${JSON.stringify(product)}`);
    }catch(err){ 
        next(err);
    }
}

export default { 
    createProduct, getProducts, getProduct, deleteProduct, updateProduct
}