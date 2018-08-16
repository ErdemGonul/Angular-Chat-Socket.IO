import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceService} from '../user-service.service';
import {LobbyserviceService} from '../lobbyservice.service';
@Component({
  selector: 'app-room-creator',
  templateUrl: './room-creator.component.html',
  styleUrls: ['./room-creator.component.css']
})
export class RoomCreatorComponent implements OnInit {
  lobbyname:string;
  
  constructor(private router: Router,private user:UserServiceService,private lobbiescomponent:LobbyserviceService) { }
  ngOnInit() {
    
  }
  lobbyNameCreated(){
    this.user.lobbyname=this.lobbyname;
    this.lobbiescomponent.lobbies.push(this.lobbyname);
    this.router.navigateByUrl('/chat');
    
  }
}
