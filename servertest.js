const path = require('path');
const express = require("express");

const app = express();
app.use(express.static(path.resolve(__dirname,'')));

const http = require("http");
const server = http.createServer(app);

const io = require('socket.io')(server); 
io.on('connection',client=>{
	handleConnection(client);
	client.on('disconnect',()=>handleDisconnect(client));
	client.on('fromClient',x=>handleFromClient(client,x));
	client.on('ping',x=>handlePing(client,x));
});

let port = process.env.PORT || 3000;
server.listen(port,()=>console.log(`listening on ${port}`));

function handleConnection(client){
	console.log('connected:',client.id);
	io.emit('fromServer',{msg:`user ${client.id} joined`});
}
function handleDisconnect(client){
	console.log('user disconnected:',client.id);
	io.emit('fromServer',{msg:`user ${client.id} left`});
}
function handleFromClient(client,x){
	console.log('from client:',client.id,x.msg);
}
function handlePing(client,x){
	console.log('ping from:',client.id);
	client.emit('ping');
}




