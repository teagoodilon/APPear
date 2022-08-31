import ClientService from "../services/client.service.js"

async function createClient(req, res, next){
    try{
        let client = req.body;
        if(!client.name || !client.cpf || !client.phone || !client.email || !client.address ){
            throw new Error("Name, cpf, phone, email and address são obrigatórios !")
        }
        client = await ClientService.createClient(client);
        res.send(client);
        logger.info(`POST /client - ${JSON.stringify(client)}`);
    }catch(err){
        next(err);
    }
}

async function getClients(req, res, next){
    try{
        
        res.send(await ClientService.getClients());
        logger.info(`GET ALL /client - ${JSON.stringify(client)}`);
    }catch(err){
        next(err);
    }
}

async function getClient(req, res, next){
    try{
        const id = req.params.id;
        res.send(await ClientService.getClient(id));
        logger.info(`GET ONE /client - ${JSON.stringify(client)}`);
    }catch(err){
        next(err);
    }
}

async function deleteClient(req, res, next){
    try{
        const id = req.params.id;
        res.send(await ClientService.deleteClient(id));
        logger.info(`DELETE ONE /client - ${JSON.stringify(client)}`);
    }catch(err){
        next(err);
    }
}

async function updateClient(req, res, next){
    try{
        let client = req.body;
        if(!client.client_id || !client.name || !client.cpf || !client.phone || !client.email || !client.address ){
            throw new Error("Id, Name, cpf, phone, email and address são obrigatórios !")
        }
        client = await ClientService.updateClient(client);
        res.send(client);
        logger.info(`PUT ONE /client - ${JSON.stringify(client)}`);
    }catch(err){ 
        next(err);
    }
}


export default { 
    createClient, getClients, getClient, deleteClient, updateClient
}