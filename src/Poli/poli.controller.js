const express = require("express");
const { getAllPoli, getPoliById, addPoli, updatePoli, deletePoli } = require("./poli.service");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newPoli = req.body;
    
        const poli = await addPoli(newPoli);
    
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
    
        const poli = await updatePoli(id, nama);
    
        res.status(200).json({ message: "Poli berhasil diupdate", poli })
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
    
        const poli = await deletePoli(id);
    
        res.status(204).json({ message: "Poli berhasil dihapus" })
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;
