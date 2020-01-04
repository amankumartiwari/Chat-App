const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('server daud raha h');
});

module.exports=router; 