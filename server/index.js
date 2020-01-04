const express =require('express');
const http = require('http');
const socket =require('socket.io');
const PORT = process.env.PORT || 5000;

const router =require('./router');

const app=express();
const server = http.createServer(app);
const io = socket(server);
app.use(router);
server.listen(PORT , ()=>{console.log(`server is running at port ${PORT}`)});