const pool = require("../db");

exports.getAllStatus = async(req, res)=> {
    try{
        const result = await pool.query('SELECT * FROM status_codes');
        res.json(result.rows);
    } catch(error){
        res.status(500).json({ error: 'error al obtener los status'});
    }
};

exports.getStatusById = async(req, res)=> {
    try{
        const { id} = req.params;

        const result = await pool.query('SELECT * FROM status_codes WHERE id = $1', [id]);

        if (result.rows.length=== 0){
            return res.status(404).json({ error: 'status no encontrado'});
        }
        res.json(result.rows[0]);
    
    }catch(error){
        res.status(500).json({ error: 'error al buscar al status'});
    }
};

exports.createStatus = async(req, res)=> {
    try{
        const { code, message, description} = req.body;

        if(!code || !message ){
            return res.status(400).json({ error: 'code y message obligatorios'});
        }
        const result = await pool.query(
            'INSERT INTO status_codes (code, message, description) VALUES ($1, $2, $3) RETURNING *',
            [code, message, description]
        );
        res.status(201).json(result.rows[0]);
    }catch(error){
        res.status(500).json({ error: 'error al crear status'});
    }
};

exports.deleteStatus = async(req, res) => {
    try{
        const {id}= req.params;

        const result = await pool.query('DELETE FROM status_codes WHERE id = $1 RETURNING *',
            [id]
        );
        if (result.rows.length ===0){
            return res.status(404).json({ error : 'no existe ese status'});
        }
        res.status(204).send();
    
    }catch(error){
        res.status(500).json({ error: 'error al eliminar'});
    }
};