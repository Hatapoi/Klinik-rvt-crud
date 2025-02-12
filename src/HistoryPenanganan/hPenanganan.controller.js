const express = require("express");
const prisma = require("../db/index");

const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const historyPenanganan = await prisma.historyPenanganan.findMany();
        
        res.status(200).json(historyPenanganan)
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        
        const historyPenanganan = await prisma.historyPenanganan.findUnique({
            where: {
                id
            }
        });

        res.status(200).json(historyPenanganan);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.post("/", async(req, res) => {
    try {
        const {penangananId, historyId} = req.body;
    
        const historyPenanganan = await prisma.historyPenanganan.create({
            data: {
                penangananId,
                historyId
            }
        });

        res.status(201).json({message: "HistoryPenanganan berhasil ditambahkan", historyPenanganan});
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.patch("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const {penangananId, historyId} = req.body;

        const historyPenangananId = await prisma.historyPenanganan.findUnique({
            where: {id}
        });

        if(!historyPenangananId) throw Error("HistoryPenanganan not Found");

        const historyPenanganan = await prisma.historyPenanganan.update({
            where: {id},
            data: {
                penangananId,
                historyId
            }
        });

        res.status(200).json({message: "HistoryPenanganan berhasil diUpdate", historyPenanganan})
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const {penangananId, historyId} = req.body;
    
        const historyPenangananId = await prisma.historyPenanganan.findUnique({
            where: {id}
        });
    
        if(!historyPenangananId) throw Error("HistoryPenanganan not Found");
    
        const historyPenanganan = await prisma.historyPenanganan.delete({
            where: {id},
            data: {
                penangananId,
                 historyId
            }
        });

        res.status(200).json("HisotryPenanganan berhasil Dihapus");
    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;