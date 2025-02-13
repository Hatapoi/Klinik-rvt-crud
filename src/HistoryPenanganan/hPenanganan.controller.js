const express = require("express");
const { getAllHistoryPenanganan, getHistoryPenangananById, addHistoryPenanganan, updateHistoryPenanganan, deleteHistoryPenanganan } = require("./hpenanganan.service");

const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const historyPenanganan = await getAllHistoryPenanganan();
        
        res.status(200).json(historyPenanganan)
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        
        const historyPenanganan = await getHistoryPenangananById(id);

        res.status(200).json(historyPenanganan);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.post("/", async(req, res) => {
    try {
        const {penangananId, historyId} = req.body;
    
        const historyPenanganan = await addHistoryPenanganan(penangananId, historyId);

        res.status(201).json({message: "HistoryPenanganan berhasil ditambahkan", historyPenanganan});
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.patch("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const {penangananId, historyId} = req.body;

        const historyPenanganan = await updateHistoryPenanganan(id, penangananId, historyId);

        res.status(200).json({message: "HistoryPenanganan berhasil diUpdate", historyPenanganan})
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
    
        const historyPenanganan = await deleteHistoryPenanganan(id);

        res.status(200).json("HisotryPenanganan berhasil Dihapus");
    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;