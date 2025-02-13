const prisma = require("../db/index");

const getAllData = async() => {
    const historyPenanganan = await prisma.historyPenanganan.findMany();

    return historyPenanganan;
}

const getDataById = async(id) => {
    const historyPenanganan = await prisma.historyPenanganan.findUnique({
        where: {
            id
        }
    });

    return historyPenanganan;
}

const addData = async(penangananId, historyId) => {
    const historyPenanganan = await prisma.historyPenanganan.create({
        data: {
            penangananId,
            historyId
        }
    });

    return historyPenanganan;
}

const updateData = async(id, penangananId, historyId) => {
    const historyPenanganan = await prisma.historyPenanganan.update({
        where: {id},
        data: {
            penangananId,
            historyId
        }
    });

    return historyPenanganan;
}

const deleteData = async(id) => {
    const historyPenanganan = await prisma.historyPenanganan.delete({
        where: {id},
    });

    return historyPenanganan;
}

module.exports = {
    getAllData,
    getDataById,
    addData,
    updateData,
    deleteData,
}