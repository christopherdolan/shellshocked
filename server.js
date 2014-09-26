var exec = require ('child_process').exec;
var fs   = require('fs');
var http = require('http');
var url  = require('url');

module.exports = http.createServer(function(req, res) {
  var parsed_url = url.parse(req.url, true)
  console.log("Server got a request!", parsed_url);

  var someval = parsed_url.query.someval;

  exec("env x='" + someval + "' bash -c 'echo This server is not vulnerable to shellshock > /tmp/website.html'"
    , function() {
      var website = fs.readFileSync('/tmp/website.html');

      res.writeHead(200);
      res.end(website);
    });
});
