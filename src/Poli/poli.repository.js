const prisma = require("../db/index");

const allData = async() => {
    const poli = await prisma.poli.findMany();

    return poli;
}

const allDataById = async(id) => {
    const poli = await prisma.poli.findUnique({
        where: { id }
    })

    return poli;
}

const createData = async(newPoli) => {
    const poli = await prisma.poli.create({
        data: {
            nama: newPoli.nama
        }
    });

    return poli;
}

const updateData = async(id, nama) => {
    const poli = await prisma.poli.update({
        where: { id },
        data: { nama },
    })

    return poli;
} 

const deleteData = async(id) => {
    const deletePoli = await prisma.poli.delete({ where: { id } })

    return deletePoli;
}

module.exports = {
    allData,
    allDataById,
    createData,
    updateData,
    deleteData,
}