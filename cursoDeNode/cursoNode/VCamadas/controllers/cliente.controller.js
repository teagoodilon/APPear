import clienteServices from "../services/cliente.services.js";

//
//FUNCIONALIDADES PARA CLIENTES
//
async function getAllClients(req, res){
	res.send( await clienteServices.getAllClients())
}

async function getClient(req, res){
	const id = req.params.id;
	res.send( await clienteServices.getClient(id))
}

async function createClient(req, res){
	const novocliente = req.body;
	res.send( await clienteServices.createClient(novocliente))
}

async function deleteClient(req, res){
	const id = req.params.id;
	res.send( await clienteServices.deleteClient(id))
}

async function updateClient(req, res){
	const novocliente = req.body;	
	const id = req.params.id;
	res.send( await clienteServices.updateClient(id, novocliente))
}


export default { 
    getAllClients, getClient, createClient, deleteClient, updateClient
}


