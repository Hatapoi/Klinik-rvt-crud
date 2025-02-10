const { allData, allDataById, createData, updateData, deleteData } = require("./poli.repository");


const getAllPoli = async() => {
    const poli = await allData();

    return poli;
}

const getPoliById = async(id) => {
    const poli = await allDataById(id);

    if(!poli) throw Error("Poli is not Found");

    return poli;
}

const addPoli = async(newPoli) => {
    const poli = await createData(newPoli);

    return poli;
}

const updatePoli = async(id, nama) => {
    await getPoliById(id);

    const poli = await updateData(id, nama);

    return poli;
}

const deletePoli = async(id) => {
    await getPoliById(id);

    const deletePoli = await deleteData(id);

    return deletePoli;
}

module.exports = {
    getAllPoli,
    getPoliById,
    addPoli,
    updatePoli,
    deletePoli,
}