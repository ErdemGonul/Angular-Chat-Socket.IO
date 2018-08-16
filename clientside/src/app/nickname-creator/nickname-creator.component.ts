import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-nickname-creator',
  templateUrl: './nickname-creator.component.html',
  styleUrls: ['./nickname-creator.component.css']
})
export class NicknameCreatorComponent implements OnInit {

  nickname:string;
 
  constructor(private router: Router,private user:UserServiceService) { }
  ngOnInit() {
  }
 

  nicknameCreated(){
    this.user.nickname=this.nickname;
    this.router.navigateByUrl('/main');
  }

}
