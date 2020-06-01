require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
