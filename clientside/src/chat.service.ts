import * as io from 'socket.io-client';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
export class ChatService {
    private url = 'http://localhost:3000';
    private socket;
    constructor() {
        this.socket = io(this.url);
    }
    public signedChat(nick,lobby){
        console.log("user signed in lobby");
        var array=[nick,lobby];
        this.socket.emit('enteredchat',array);
    }
    public disconnectChat(lobby){

        this.socket.emit('disconnectchat',lobby);
    }
    public createRoom(roomName){
        this.socket.emit('create',roomName);
    }

    public sendMessage(message) {
        this.socket.emit('new-message', message);
    }
    public sendName(name){
        this.socket.emit('name',name);
    }
    public roomListCaller(){
        this.socket.emit('getroom','calling rooms');
    }
    public getMessages ()  {
        return Observable.create((observer) => {
            
            this.socket.on('new-message', (message) => {
                observer.next(message);
            });
        
        });
}
    public getRoomList(){
        return Observable.create((observer)=>{


            this.socket.on('getroom',(room) =>{
                observer.next(room);
            });
        });
    }
public getFriendName(){
    return Observable.create((observer) => {
        this.socket.on('name', (name) => {

            observer.next(name);
        });
    });
}
}