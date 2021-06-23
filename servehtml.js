const path = require('path');
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.use(express.static(path.resolve(__dirname,'')));

let port = process.env.PORT || 3000;
server.listen(port,()=>console.log(`listening on ${port}`));








