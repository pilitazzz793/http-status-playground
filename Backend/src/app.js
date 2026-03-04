//aqui se encuentra nuestro servidor

const express = require("express");
require("dotenv").config();

const statusRoutes = require('/routes/status.routes');
const pool = require("./db");

const app = express();
app.use(express.json());
app.use('/status', statusRoutes);



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});