import * as io from 'socket.io-client';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
export class ChatService {
    private url = 'http://localhost:3000';
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

    public sendMessage(message) {
        this.socket.emit('new-message', message);
        console.log('sendMessage', message);
    }
    public sendName(name){
        this.socket.emit('name',name);
    }

    public getMessages ()  {
        console.log('ChatService.getMessages');
        return Observable.create((observer) => {
            console.log('Observable.create');
            this.socket.on('new-message', (message) => {
                console.log('this.socket.on');
                observer.next(message);
                console.log("of");
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