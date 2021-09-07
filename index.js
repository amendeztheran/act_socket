const { Socket } = require('socket.io');

var act3 = require ('express') ();
var http = require ('http').createServer(act3);
var io = require ('socket.io') (http);
act3.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

/* io.on('connection', (socket) => {
    console.log('un usuario conectado');
});*/
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});
//act3.get ('/', (req, res) => {
  //  res.send('<h1> ¡Bienvenidos usuarios de la salud!</h1>');

http.listen(3027, () => {
    console.log('listening on *:3027');
});