import Api from "./Api";

const getDevolucaos = () => {
    return Api().get('/devolucao');
}

const deleteDevolucao = (itemid) => {
    return Api().delete(`/devolucao/${itemid}`);
}

const postDevolucao = (dados) => {
    return Api().post('/devolucao',dados)
}

export {getDevolucaos, deleteDevolucao, postDevolucao};
