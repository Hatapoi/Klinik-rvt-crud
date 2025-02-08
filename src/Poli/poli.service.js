const prisma = require("../db/index");

const getAllPoli = async() => {
    const poli = await prisma.poli.findMany()

    return poli;
}

const getPoliById = async(id) => {
    const poli = await prisma.poli.findUnique({
        where: { id }
    })

    return poli;
}

const addPoli = async() => {
    const poli = await prisma.poli.create({
        data: {
            nama: newPoli.nama
        }
    });

    return poli;
}

const updatePoli = async(id, nama) => {
    const poli = await prisma.poli.update({
        where: { id },
        data: { nama },
    })

    return poli;
}

const deletePoli = async() => {
    const deletePoli = await prisma.poli.delete({ where: { id } })

    return deletePoli;
}

module.exports = {
    getAllPoli,
    getPoliById,
    addPoli,
    updatePoli,
    deletePoli
}