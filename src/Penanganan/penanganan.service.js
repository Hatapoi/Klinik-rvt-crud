const { getAllData, getAllDataById, addData, updateData, deleteData } = require("./penanganan.repository");

const getAllPenanganan = async() => {
    const penanganan = await getAllData();

    return penanganan;
}

const getAllPenangananById = async(id) => {
    const penanganan = await getAllDataById(id);

    if (!penanganan) throw Error("Penanganan is not Found");

    return penanganan;
}

const addPenanganan = async(nama, harga, poliId) => {
    const penanganan = await addData(nama, harga, poliId);

    return penanganan;
}

const updatePenanganan = async(id, nama, harga, poliId) => {
    await getAllPenangananById(id);

    const penanganan = await updateData(id, nama, harga, poliId);

    return penanganan;
}

const deletePenanganan = async(id) => {
    await getAllPenangananById(id)

    const penanganan = await deleteData(id);

    return penanganan;
}

module.exports = {
    getAllPenanganan,
    getAllPenangananById,
    addPenanganan,
    updatePenanganan,
    deletePenanganan,
}