import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
import { UserServiceService } from '../user-service.service';
import {LobbyserviceService} from '../lobbyservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message: string;
  sentdatas:string[];
  messages: string[] = [];
  nickname:string;
  lobbyname:string;
  friendname:string;
  talkers:string[]=[];
  talkersorder:string[]=[];
  lobbylist:string[]=[];
  constructor(private chatService: ChatService,private user:UserServiceService,private router:Router,private lobbyservice:LobbyserviceService) {
  this.nickname=user.nickname;

  this.lobbyname=user.lobbyname;
  chatService.signedChat(this.nickname,this.lobbyname);
  this.talkers.push(this.nickname);
  }
  toLobbies(){
    this.disconnect();
    this.router.navigateByUrl('/lobbies');
    
  }
  sendMessage() {
    this.sendName();
    //this.chatService.sendMessage(this.message);
    this.sentdatas =[this.nickname,this.message];
    this.chatService.sendMessage(this.sentdatas);
    this.message="";
  }

  sendName(){
    console.log("burdam00");
    this.chatService.sendName(this.nickname);
  }
  disconnect(){
    this.chatService.disconnectChat(this.lobbyname);
  }

  ngOnInit() {
    this.sendName();
     this.chatService.getFriendName().subscribe((name:string) => {
      if(name!=this.nickname){
      this.friendname=name;
        this.talkers.push(this.friendname);
      }
     });
    
     this.chatService.getRoomList().subscribe((roomList) => {
          console.log(this.lobbylist);
          console.log(roomList);
          this.lobbylist=roomList;
          this.lobbyservice.lobbies=this.lobbylist;
       
     });
    this.chatService
      .getMessages()
      .subscribe((messageget: string[]) => {
        if(this.talkers.includes(messageget[0])){
            this.talkersorder.push(messageget[0])
            this.messages.push(messageget[1]);
        }
        
      });

}

}
