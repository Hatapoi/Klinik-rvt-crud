const express = require("express");
const { getAllUser, getUserById, addUser, updateUser, deleteUser } = require("./user.service");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const user = await getAllUser();

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const user = await getUserById(id);

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const {
            username,
            tanggalLahir,
            tempatLahir,
            alamat,
            nik,
            bpjs
        } = req.body;

        const user = await addUser(username, tanggalLahir, tempatLahir, alamat, nik, bpjs);

        res.status(201).json({ message: "User berhasil dibuat", user });
    } catch (error) {
        res.status(400).json(error.message)
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const {
            username,
            tanggalLahir,
            tempatLahir,
            alamat,
            nik,
            bpjs
        } = req.body;
    
        const user = await updateUser(id, username, tanggalLahir, tempatLahir, alamat, nik, bpjs);
    
        res.status(200).json({message: "User berhasil diUpdate", user});
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.delete("/:id", async(req, res) => {
    const {id} = req.params;

    const user = await deleteUser(id);

    res.status(200).json({message: "User berhasil diHapus"});
});

module.exports = router;