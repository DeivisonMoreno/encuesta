const express = require("express");
const app = express();
const fs = require("fs");
const retos = require("./retos.json");
const messages = require("./message.json");
const path = require("path");

app.use(express.json());
app.use(express.static("public"));

app.post("/calcular", (req, res) => {
    const { transporte, carne, recicla } = req.body;
    let huella = 100;

    huella -= parseInt(transporte) * 2;
    if (carne === "no") huella -= 20;
    if (recicla === "si") huella -= 15;

    const reto = retos[Math.floor(Math.random() * retos.length)];
    const message = messages[Math.floor(Math.random() * messages.length)];

    res.json({ huella, reto, message});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
