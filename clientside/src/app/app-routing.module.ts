import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NicknameCreatorComponent }      from './nickname-creator/nickname-creator.component';
import { ChatComponent }      from './chat/chat.component';
import { RoomCreatorComponent }      from './room-creator/room-creator.component';
import {StartpageComponent} from './startpage/startpage.component';
import {LobbiespageComponent} from './lobbiespage/lobbiespage.component';
const routes: Routes = [
  { path: '', redirectTo: '/nickname', pathMatch: 'full' },
  { path: 'nickname', component: NicknameCreatorComponent },
  { path: 'room', component: RoomCreatorComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'main', component: StartpageComponent },
  { path: 'lobbies', component:LobbiespageComponent}
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule {
  
}