const http =require('http');
const port = 8000;
const fs = require('fs');
//writeing the basic requestHandlert to response
function requestHandler(req, res){
  console.log(req.url);
  //embedded the html
  res.writeHead(200, {'content-type':'text/html'});

  //  fs.readFile('index.html', function(err, data){
  //   if(err){
  //     console.log('error', err);
  //     return res.end('<h1>Error</h1>');
  //   }
  //   return res.end(data);
  // })
  
  //optional to display the gotcha1  
 // res.end('<h1>Gotcha!</h1>');


//let rendering the different html pages in single 
let filePath;
switch(req.url){
  case '/':
    filePath = './index.html'
    break;
  case '/profile':
    filePath = './profile.html'
    break;
  default:
    filePath = './404.html'
}

fs.readFile(filePath, function(err, data){
  if(err){
    console.log('error', err);
    return res.end('<h1>Error</h1>');
  }
  return res.end(data);
});
}
const server = http.createServer(requestHandler);

server.listen(port, function(err){
  if(err){
    console.log("the server is has some error pls correct it")
  return;
  }
  console.log("Server is up and running on port:", port);

});