const express = require("express");
const router = express.Router();


// posts
//index 
router.get("/", ()=>{
    res.send("GET for posts");
});

//show 
router.get("/:id", ()=>{
    res.send("GET for  posts id");
});

//post 
router.post("/", ()=>{
    res.send("POST for posts");
});

//delete 
router.get("/:id", ()=>{
    res.send("delete for posts id");
});

module.exports = router;