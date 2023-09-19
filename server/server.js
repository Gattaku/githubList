const express = require("express");
const app = express();
const PORT = 5000;
require("dotenv").config();

const authRoute = require("./src/v1/routes/index.js");
const cors = require("cors");


app.get("/", (req, res) => {
    res.send("Hello Nodejs");
})


app.use(cors({
    origin: "http://localhost:3000",
}))
app.use(express.json());
app.use("/api/v1", authRoute);

app.listen(PORT, () => console.log("サーバー起動中・・・"));