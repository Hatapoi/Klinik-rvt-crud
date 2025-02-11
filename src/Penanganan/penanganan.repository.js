const prisma = require("../db/index");

const getAllData = async() => {
    const penanganan = await prisma.penanganan.findMany();

    return penanganan;
}

const getAllDataById = async(id) => {
    const penanganan = await prisma.penanganan.findUnique({
        where: {
            id
        }
    });

    return penanganan;
}

const addData = async(nama, harga, poliId) => {
    const penanganan = await prisma.penanganan.create({
        data: {
            nama,
            harga,
            poliId
        }
    });

    return penanganan
}

const updateData = async(id, nama, harga, poliId) => {
    const penanganan = await prisma.penanganan.update({
        where: {
            id
        },
        data: {
            nama,
            harga,
            poliId,
        }
    });

    return penanganan;
}

const deleteData = async(id) => {
    const penanganan = await prisma.penanganan.delete({
        where: {
            id
        }
    });

    return penanganan;
}

module.exports = {
    getAllData,
    getAllDataById,
    addData,
    updateData,
    deleteData,
}

