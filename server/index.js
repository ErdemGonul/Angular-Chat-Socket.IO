let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);
var rooms=[];
const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    
    

    var connectedRoom=Array();



    socket.on('create',(room)=>{
        console.log("oda yaratıldı",room);
        socket.join(room);
        rooms.push(room);
        io.emit('getroom',rooms);
        console.log(rooms);
    });

  
 
    socket.on('new-message', (message) => {
        io.in(connectedRoom).emit('new-message',message);   
        }

    );
    socket.on('enteredchat',(message)=>{
        connectedRoom.push(message[1]);
         socket.join(message[1]);
         socket.nickname = message[0];
         console.log(socket.nickname,'connected to ', connectedRoom);
    });
    socket.on('disconnectchat',(message)=>{
        socket.leave(message);
        connectedRoom = connectedRoom.filter(function(item) { 
            return item !== message; 
          });
     
   });
    socket.on('name',(name)=>{
    
        io.emit('name',name);
       
    })
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});