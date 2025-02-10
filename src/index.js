const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json())

const poliController = require("./Poli/poli.controller");
const penangananController = require("./Penanganan/penanganan.controller");

app.use("/poli", poliController)
app.use("/penanganan", penangananController);

app.listen(PORT, () => {
    console.log(`express API running on ${PORT}`)
})