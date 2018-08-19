import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceService} from '../user-service.service';
import {LobbyserviceService} from '../lobbyservice.service';
import { ChatService } from '../../chat.service';
@Component({
  selector: 'app-lobbiespage',
  templateUrl: './lobbiespage.component.html',
  styleUrls: ['./lobbiespage.component.css']
})
export class LobbiespageComponent implements OnInit {

  lobbies: string[] = [];
  constructor(private router: Router,private user:UserServiceService,private lobbyservice:LobbyserviceService,private chatService:ChatService) { }

  ngOnInit() {
    this.chatService.roomListCaller();
    
    
    this.chatService.getRoomList().subscribe((roomList) => {
      this.lobbies=roomList;
      this.lobbyservice.lobbies=this.lobbies;
   
   
 });
  }
  navigateToChat(name){
    this.user.lobbyname=name;
    this.router.navigateByUrl('/chat');
  }
  navigateToLobbyCreator(){
    this.router.navigateByUrl('room');
  }
 
}
