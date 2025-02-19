const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

dotenv.config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

const poliController = require("./Poli/poli.controller");
const penangananController = require("./Penanganan/penanganan.controller");
const userController = require("./User/user.controller");
const historyController = require("./History/history.controller");
const historyPenanganan = require("./HistoryPenanganan/hPenanganan.controller");


app.use("/poli", poliController)
app.use("/penanganan", penangananController);
app.use("/user", userController);
app.use("/history", historyController);
app.use("/hpenanganan", historyPenanganan);


app.listen(PORT, () => {
    console.log(`express API running on ${PORT}`)
})