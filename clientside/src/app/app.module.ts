import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatService } from '../chat.service';
import { AppRoutingModule } from './/app-routing.module';
import { NicknameCreatorComponent } from './nickname-creator/nickname-creator.component';
import { RoomCreatorComponent } from './room-creator/room-creator.component';
import { ChatComponent } from './chat/chat.component';
import {StartpageComponent} from './startpage/startpage.component';
import{UserServiceService} from './user-service.service';
import { LobbiespageComponent } from './lobbiespage/lobbiespage.component';
@NgModule({
  declarations: [
    AppComponent,
    NicknameCreatorComponent,
    RoomCreatorComponent,
    ChatComponent,
    StartpageComponent,
    LobbiespageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  
  providers: [ChatService,UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}