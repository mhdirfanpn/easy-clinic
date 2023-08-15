import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Token } from 'src/app/interface/token';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit {

  role : string = "user"
  token! : Token
  loader : Boolean = true

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.token = this.authService.getDecodedAccessToken('user')
    setTimeout(()=>{
      this.loader = false
    },1000)
  }

}
