var Socket;
window.onload = start;

async function start() {
	Socket = io({ transports: ['websocket'] }); //stops polling server constantly (eg. when using live server for front debugging!)
	Socket.on('fromServer',x=>console.log('msg from server:',x.msg));
	Socket.on('ping',x=>console.log('got pinged from server!'));
	//setTimeout(emitHello,2000); //geht! muss aber den client reloaden!!!
	emitHello();
}
function emitHello(){Socket.emit('fromClient', { msg: 'hello I connected!' });}
function emitPing(){Socket.emit('ping', { msg: 'are you there?' });}
function onClickPing(){	Socket.emit('ping');}


