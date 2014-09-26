var fs       = require('fs');

var attacker = require('./attacker');
var server   = require('./server');

var port = process.env.PORT || '3001';

console.log("Spawning the server at port: " + port);
server.listen(port, function() {
  setTimeout(function() {
    console.log("Attacking the server with shellshock command.");
    attacker.attack(port, function(res) {

      res.on('data', function(data) {
        console.log('Server responds with: ' + data);
      });

      res.on('end', function() {
        process.exit(0);
      });
    });
  }, 1000);
});
