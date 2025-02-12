const prisma = require("../db/index");

const getAllData = async() => {
    const history = await prisma.history.findMany();

    return history;
}

const getDataById = async(id) => {
    const history = await prisma.history.findUnique({
        where: {
            id
        }
    });

    return history;
}

const addData = async(userId, poliId) => {
    const history = await prisma.history.create({
        data: {
            userId,
            poliId,
        }
    });

    return history;
}

const updateData = async(id, userId, poliId) => {
    const history = await prisma.history.update({
        where: {
            id
        },
        data: {
            userId,
            poliId,
        }
    });

    return history;
}

const deleteData = async(id) => {
    const history = await prisma.history.delete({
        where: {
            id
        }
    });

    return history;
}

module.exports = {
    getAllData,
    getDataById,
    addData,
    updateData,
    deleteData,
}

