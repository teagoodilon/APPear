import Api from "./Api";

const getItens = () => {
    return Api().get('/item');
}

const deleteItem = (itemid) => {
    return Api().delete(`/item/${itemid}`);
}

const putItem =(itemid, dados)=>{
    return Api().put(`/item/${itemid}`, dados);
}
export {getItens, deleteItem, putItem};
