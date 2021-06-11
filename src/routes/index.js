const express = require("express");
const router = express.Router();
const pool = require("../database.js");

router.get("/",(req,res)=>{
    res.send("index");
});

router.get

module.exports = router;    