const path = require('path');
const express = require("express");
const app = express();
app.use(express.static(path.resolve(__dirname,'')));

const http = require("http");
const server = http.createServer(app);

// const domain = "localhost"; 
// const port = 8080; 
// const io = require('socket.io'); 
// const server = http.createServer(); 
// server.listen(port, domain); 
// const socket = io.listen(server);

const {Server} = require("socket.io");
const io = new Server(server);
io.on('connection',client=>{
	handleConnection(client);
	client.on('disconnect',()=>handleDisconnect(client));
	client.on('fromClient',x=>handleFromClient(client,x));
	client.on('ping',x=>handlePing(client,x));
});

let port = process.env.PORT || 3000;
server.listen(port,()=>console.log(`listening on ${port}`));

function handlePing(client,x){
	console.log('ping from:',client.id);
	client.emit('ping');
}
function handleFromClient(client,x){
	console.log('from client:',client.id,x.msg);
}
function handleConnection(client){
	console.log('connected:',client.id);
}




