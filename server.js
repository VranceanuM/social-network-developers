const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("APi running"));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server startet on ${PORT}`));
