const express = require("express");
const { getAllPenanganan, getAllPenangananById, addPenanganan, updatePenanganan, deletePenanganan } = require("./penanganan.service");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const penanganan = await getAllPenanganan();

        res.status(200).json(penanganan);
    } catch (error) {
        res.status(400).json(error.message);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const penanganan = await getAllPenangananById(id);

        res.status(200).json(penanganan);
    } catch (error) {
        res.status(400).json(error.message);
    }
})

router.post("/", async (req, res) => {
    try {
        const { nama, harga, poliId } = req.body;

        const penanganan = await addPenanganan(nama, harga, poliId);

        res.status(201).json({ message: "Penanganan berhasil dibuat", penanganan })
    } catch (error) {
        res.status(400).status(error.message);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, harga, poliId } = req.body;

        const penanganan = await updatePenanganan(id, nama, harga, poliId);

        res.status(200).json({ message: "Data berhasil diUpdate", penanganan });
    } catch (error) {
        res.status(400).json(error.message);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const penanganan = await deletePenanganan(id);

        res.status(200).json({ message: "penanganan berhasil diHapus" })
    } catch (error) {
        res.status(400).json(error, message);
    }

})

module.exports = router;