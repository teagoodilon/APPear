import Api from "./Api";

const getItens = () => {
    return Api().get('/itemAprovar');
}

const deleteItem = (itemid) => {
    return Api().delete(`/itemAprovar/${itemid}`);
}

const putItem =(itemid)=>{
    return Api().put(`/itemAprovar/${itemid}`);
}
export {getItens, deleteItem, putItem};
