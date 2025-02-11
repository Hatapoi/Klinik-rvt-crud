const prisma = require("../db/index");

const getAllData = async() => {
    const user = await prisma.user.findMany();

    return user;
}

const getDataById = async(id) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    });

    return user;
}

const addData = async(username, tanggalLahir, tempatLahir, alamat, nik, bpjs) => {
    const user = await prisma.user.create({
        data: {
            username,
            tanggalLahir,
            tempatLahir,
            alamat,
            nik,
            bpjs,
        }
    });

    return user;
}

const updateData = async(id, username, tanggalLahir, tempatLahir, alamat, nik, bpjs) => {
    const user = await prisma.user.update({
        where: { id },
        data: {
            username,
            tanggalLahir,
            tempatLahir,
            alamat,
            nik,
            bpjs
        }
    });

    return user;
}

const deleteData = async(id) => {
    const user = await prisma.user.delete({
        where: {
            id
        }
    });

    return user;
}

module.exports = {
    getAllData,
    getDataById,
    addData,
    updateData,
    deleteData
}