const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json())

const poliController = require("./Poli/poli.controller");
app.use("/poli", poliController)

app.listen(PORT, () => {
    console.log(`express API running on ${PORT}`)
})