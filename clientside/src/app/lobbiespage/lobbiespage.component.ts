import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceService} from '../user-service.service';
import {LobbyserviceService} from '../lobbyservice.service';
@Component({
  selector: 'app-lobbiespage',
  templateUrl: './lobbiespage.component.html',
  styleUrls: ['./lobbiespage.component.css']
})
export class LobbiespageComponent implements OnInit {

  lobbies: string[] = [];
  constructor(private router: Router,private user:UserServiceService,private lobbyservice:LobbyserviceService) { }

  ngOnInit() {
    this.lobbies=this.lobbyservice.lobbies;
  }
 
}
