import SupplierService from "../services/supplier.service.js"
async function createSupplier(req, res, next){
    try{
        let supplier = req.body;
        if(!supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address ){
            throw new Error("Name, cnpj, phone, email and address são obrigatórios !")
        }
        supplier = await SupplierService.createSupplier(supplier);
        res.send(supplier);
        logger.info(`POST /supplier - ${JSON.stringify(supplier)}`);
    }catch(err){
        next(err);
    }
}

async function getSuppliers(req, res, next){
    try{
        res.send(await SupplierService.getSuppliers());
        logger.info(`GET ALL /supplier - ${JSON.stringify(supplier)}`);
    }catch(err){
        next(err);
    }
}

async function getSupplier(req, res, next){
    try{
        const id = req.params.id;
        res.send(await SupplierService.getSupplier(id));
        logger.info(`GET ONE /supplier - ${JSON.stringify(supplier)}`);
    }catch(err){
        next(err);
    }
}

async function deleteSupplier(req, res, next){
    try{
        const id = req.params.id;
        res.send(await SupplierService.deleteSupplier(id));
        logger.info(`DELETE ONE /supplier - ${JSON.stringify(supplier)}`);
    }catch(err){
        next(err);
    }
}

async function updateSupplier(req, res, next){
    try{
        let supplier = req.body;
        if(!supplier.supplier_id || !supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address ){
            throw new Error("Id, Name, cnpj, phone, email and address são obrigatórios !")
        }
        supplier = await SupplierService.updateSupplier(supplier);
        res.send(supplier);
        logger.info(`PUT ONE /supplier - ${JSON.stringify(supplier)}`);
    }catch(err){ 
        next(err);
    }
}


export default { 
    createSupplier, getSuppliers, getSupplier, deleteSupplier, updateSupplier
}