const express = require("express");
const router = express.Router();

//index - users
router.get("/", ()=>{
    res.send("GET for users");
});

//show - users
router.get("/:id", ()=>{
    res.send("GET for  users id");
});

//post - users
router.post("/", ()=>{
    res.send("POST for users");
});

//delete - users
router.get("/:id", ()=>{
    res.send("delete for users id");
});


module.exports = router;