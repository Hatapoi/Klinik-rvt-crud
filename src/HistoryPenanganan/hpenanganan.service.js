const { getAllData, getDataById, updateData, deleteData, addData } = require("./hpenanganan.repository");

const getAllHistoryPenanganan = async() => {
    const historyPenanganan = await getAllData();

    return historyPenanganan;
}

const getHistoryPenangananById = async(id) => {
    const historyPenanganan = await getDataById(id);

    if(!historyPenanganan) throw Error("HistoryPenanganan not Found");

    return historyPenanganan;
}

const addHistoryPenanganan = async(penangananId, historyId) => {
    const historyPenanganan = await addData(penangananId, historyId);

    return historyPenanganan;
}

const updateHistoryPenanganan = async(id, penangananId, historyId) => {
    await getHistoryPenangananById(id);

    const historyPenanganan = await updateData(id, penangananId, historyId);

    return historyPenanganan;
}

const deleteHistoryPenanganan = async(id) => {
    await getHistoryPenangananById(id);

    const historyPenanganan = await deleteData(id);

    return historyPenanganan;
}

module.exports = {
    getAllHistoryPenanganan,
    getHistoryPenangananById,
    addHistoryPenanganan,
    updateHistoryPenanganan,
    deleteHistoryPenanganan
}