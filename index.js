const express = require('express');
const path = require('path');
const server = express();
server.use(express.static('/www'));
server.get('/',function(req,res){
	path.resolve('./view/index.html')
})
server.listen(80);

