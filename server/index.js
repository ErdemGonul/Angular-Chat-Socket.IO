let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);
var rooms=[];
const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    
    
    var name;
    var connectedRoom;

    

    socket.on('create',(room)=>{
        socket.join(room);
        rooms.push(room);
        io.emit('getroom',rooms);
    });
    socket.on('getroom',(room)=>{
       io.emit('getroom',rooms);
    });
    socket.on('new-message', (message) => {
        io.in(connectedRoom).emit('new-message',message);   
        });

    socket.on('enteredchat',(message)=>{
        connectedRoom=message[1];
        socket.join(connectedRoom);
        socket.nickname = message[0];
        var sending=[socket.nickname,'connectionmessage'];
        io.in(connectedRoom).emit('new-message',sending);   
    });
    socket.on('disconnectchat',(message)=>{
        socket.leave(message);
        connectedRoom = null;
   });
    socket.on('name',(name)=>{
        io.emit('name',name);
    })
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});