const { getAllData, getDataById, addData, updateData, deleteData } = require("./user.repository");

const getAllUser = async() => {
    const user = await getAllData();

    return user;
}

const getUserById = async(id) => {
    const user = await getDataById(id);

    if (!user) throw Error("User not Found");

    return user;
}

const addUser = async(username, tanggalLahir, tempatLahir, alamat, nik, bpjs) => {
    const user = await addData(username, tanggalLahir, tempatLahir, alamat, nik, bpjs);

    return user;
}

const updateUser = async(id, username, tanggalLahir, tempatLahir, alamat, nik, bpjs) => {
    await getUserById(id);

    const user = await updateData(id, username, tanggalLahir, tempatLahir, alamat, nik, bpjs);

    return user;
}

const deleteUser = async(id) => {
    const user = await deleteData(id);

    return user;
}

module.exports = {
    getAllUser,
    getUserById,
    addUser,
    updateUser,
    deleteUser
}