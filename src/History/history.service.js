const { getAllData, getDataById, addData, updateData, deleteData } = require("./history.repository");

const getAllHistory = async() => {
    const history = await getAllData();

    return history;
}

const getHistoryById = async(id) => {
    const history = await getDataById(id);

    if (!history) throw Error("history is not Found");

    return history;
}

const addHistory = async(userId, poliId) => {
    const history = await addData(userId, poliId);

    return history;
}

const updateHistory = async(id, userId, poliId) => {
    await getHistoryById(id);

    const history = await updateData(id, userId, poliId);

    return history;
}

const deleteHistory = async(id) => {
    await getHistoryById(id)

    const history = await deleteData(id);

    return history;
}

module.exports = {
    getAllHistory,
    getHistoryById,
    addHistory,
    updateHistory,
    deleteHistory,
}