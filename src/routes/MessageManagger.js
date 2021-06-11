const express = require('express');
const router = express.Router();
const pool = require("../database");



router.get("/cms",async(req,res)=>{
    const info = await pool.query("SELECT * FROM contact_information");
    res.render("managger/cms", {info});
    console.log(info)
});









module.exports = router;