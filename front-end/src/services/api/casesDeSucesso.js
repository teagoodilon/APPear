import Api from "./Api";

const getCases = () => {
    return Api().get('/casesDeSucesso');
}

const deleteCase = (itemid) => {
    return Api().delete(`/casesDeSucesso/${itemid}`);
}

const postCase = (dados) => {
    return Api().post('/casesDeSucesso',dados)
}

export {getCases, deleteCase, postCase};
