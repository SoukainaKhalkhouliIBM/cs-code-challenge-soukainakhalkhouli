const http = require('http');
const fs  = require('fs');

function onLoad(req, res){
    res.writeHead(200, { 'Content-type' : 'text/html' });

    fs.readFile('./index.html', null, function(error, data){
        if(error){
            res.writeHead(404);
            res.write("sorry, there are no results for your search");
        }else{
            res.write(data);
        }
        res.end();
    });
}

http.createServer(onLoad).listen(3000);