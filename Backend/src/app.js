//aqui se encuentra nuestro servidor, el cual se encarga de recibir las peticiones y enviar las respuestas

const express = require("express");
require("dotenv").config();
const pool = require("./db");

const app = express();
app.use(express.json());

//ruta de prueba
app.get("/", async (req, res) =>{
    try {
        const result = await pool.query("SELECT NOW()");
        res.status(200).json({
            message: "servidor y db funcionando correctamente",
            time: result.rows[0],
        });
    } catch(error) {
        res.status(500).json({
            error :" error al conectar con la base de datos",
        });
        
    }
});

//creamos nueva ruta para traer los estados
app.get("/status", async (req, res) =>{
    try{
        const result = await pool.query("SELECT * FROM status_codes");
        res.json(result.rows);
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "error al obtener los status"})
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});