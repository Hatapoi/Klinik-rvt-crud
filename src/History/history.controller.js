const express = require("express");
const { getAllHistory, getHistoryById, addHistory, updateHistory, deleteHistory } = require("./history.service");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const history = await getAllHistory();

        res.status(200).json(history);
    } catch (error) {
        res.status(400).json(error.message);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const history = await getHistoryById(id);

        res.status(200).json(history);
    } catch (error) {
        res.status(400).json(error.message);
    }
})

router.post("/", async (req, res) => {
    try {
        const { userId, poliId } = req.body;

        const history = await addHistory(userId, poliId);

        res.status(201).json({ message: "history berhasil dibuat", history })
    } catch (error) {
        res.status(400).status(error.message);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, poliId } = req.body;

        const history = await updateHistory(id, userId, poliId);

        res.status(200).json({ message: "History berhasil diUpdate", history });
    } catch (error) {
        res.status(400).json(error.message);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const history = await deleteHistory(id);

        res.status(200).json({ message: "history berhasil diHapus" })
    } catch (error) {
        res.status(400).json(error, message);
    }

})

module.exports = router;