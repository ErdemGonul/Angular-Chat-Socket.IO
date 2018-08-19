import { Component } from '@angular/core';
import { ChatService } from '../chat.service';
import {StartpageComponent} from '../app/startpage/startpage.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router) { }
  toMainPage(){
    this.router.navigateByUrl('/');
}
}
