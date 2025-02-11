const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json())

const poliController = require("./Poli/poli.controller");
const penangananController = require("./Penanganan/penanganan.controller");
const userController = require("./User/user.controller")

app.use("/poli", poliController)
app.use("/penanganan", penangananController);
app.use("/user", userController);

app.listen(PORT, () => {
    console.log(`express API running on ${PORT}`)
})