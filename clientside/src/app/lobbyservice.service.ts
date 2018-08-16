import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LobbyserviceService {

  constructor() { }

  
  lobby:string;
  lobbies: string[] = [];

  addLobby(){

    this.lobbies.push(this.lobby);
  }
}
