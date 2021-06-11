const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get("/contact",(req, res) => {
    res.render("formulario/form");
});

router.post("/formulario/form",async (req, res) => {
    const {nombre,apellido,email,telefono,empresa,mensaje,send_at} = req.body;
    const contactInfo = {
        nombre,
        apellido,
        email,
        telefono,
        empresa,
        mensaje,
        send_at
    };
   await pool.query ("INSERT INTO contact_information set ?",[contactInfo]);
    console.log(contactInfo);
})
module.exports = router;
