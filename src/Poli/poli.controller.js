const express = require("express");
const prisma = require("../db/index");
const { getAllPoli, getPoliById } = require("./poli.service");
const { updateData, deleteData } = require("./poli.repository");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newPoli = req.body;
    
        const poli = await prisma.poli.create({
            data: {
                nama: newPoli.nama
            }
        });
    
        res.status(201).json({ message: "Poli berhasil dibuat", poli })
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.get("/", async (req, res) => {
    try {
        const poli = await getAllPoli();

        res.status(200).json(poli)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
    
        const poli = await getPoliById(id)
    
        res.status(200).json(poli)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nama } = req.body;
    
        const updatePoli = await updateData(id, nama);
    
        res.status(200).json({ message: "Poli berhasil diupdate", updatePoli })
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
    
        const deletePoli = await deleteData(id);
    
        res.status(204).json({ message: "Poli berhasil dihapus" })
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;
