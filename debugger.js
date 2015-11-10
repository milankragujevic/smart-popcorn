var net = require('net');
var fs = require('fs');

// file name for the current log
var fileName = __dirname + '/log_' + new Date().getTime();

// Start a TCP Server
var server = net.createServer(function (socket) {

    // Log what the TV sends
    socket.on('data', function (data) {
        var log = '[TV] ' + data;
        fs.appendFileSync(fileName, log);
        console.log(log);
    });

    // TV disconnected
    socket.on('end', function () {
        console.log('[TV] disconnected')
    });

});

// listen to the port which the TV connects to
var port = 45634;
server.listen(port);

console.log('The debugging server is listening to port: ' + port);
console.log('Waiting for TV messages...');