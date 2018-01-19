var http = require('http');  
var url=require('url');  
var querystring = require('querystring');

http.createServer(function (request, response) {  
    var pathUrl = url.parse(request.url, true).query; 
    var start = pathUrl.start ? ("?start="+pathUrl.start) : '';
    var count = pathUrl.count ? ("&count="+pathUrl.count) : '';
    var content = ''; 
    
    var opt = {  
         host:'api.douban.com',  
         port:'80',  
         method:'GET',  
         path: encodeURI(pathUrl.url) + start + count
    };  
    // console.log(opt.path)
    var req = http.request(opt, function(res) {  
        res.on('data',function(body){ 
            content+=body;  
        }).on("end", function () {  
            console.log(pathUrl.url )
            response.writeHead(200, {
              'Content-Type': 'text/html;charset=utf-8',
              'Referer': 'http://www.google.com'
            });  
            response.write(content);  
            response.end();  
        });  
    }).on('error', function(e) {  
        console.log("Got error: " + e.message);  
    });  
    req.end();  
}).listen(8111);
console.log("Server runing at port: " + 8111 + ".");