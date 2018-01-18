var http = require('http');  
var url=require('url');  
var querystring = require('querystring');

http.createServer(function (request, response) {  
    var pathUrl = url.parse(request.url, true).query;  
    console.log(pathUrl.url);
    var content = ''; 
    var opt = {  
         host:'api.douban.com',  
         port:'80',  
         method:'GET',  
         path:pathUrl.url
    };  
    var req = http.request(opt, function(res) {  
        res.on('data',function(body){  
            console.log('return');  
            content+=body;  
        }).on("end", function () {  
            response.writeHead(200, {
              'Content-Type': 'text/html',
              'Referer': 'http://www.google.com'
            });  
            response.write(content);  
            response.end();  
        });  
    }).on('error', function(e) {  
        console.log("Got error: " + e.message);  
    });  
    req.end();  
}).listen(8111);//监听端口80,将80端口的请求转发到news.163.com  
console.log("Server runing at port: " + 8111 + ".");