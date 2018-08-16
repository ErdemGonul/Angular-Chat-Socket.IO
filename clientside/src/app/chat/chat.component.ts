import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
import { UserServiceService } from '../user-service.service';
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
  constructor(private chatService: ChatService,private user:UserServiceService,private router:Router) {
  this.nickname=user.nickname;
  this.lobbyname=user.lobbyname;
  this.talkers.push(this.nickname);
  }
  toLobbies(){
    this.router.navigateByUrl('/lobbies');
  }
  sendMessage() {
    this.sendName();
    //this.chatService.sendMessage(this.message);
    this.sentdatas =[this.nickname,this.message];
    this.chatService.sendMessage(this.sentdatas);
  }
  sendName(){
    console.log("burdam00");
    this.chatService.sendName(this.nickname);
  }

  ngOnInit() {

    this.sendName();
     this.chatService.getFriendName().subscribe((name:string) => {
      console.log("isim alıcı");
      if(name!=this.nickname){
      this.friendname=name;
      console.log("Friend name is:",this.friendname);
        this.talkers.push(this.friendname);
      }
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
