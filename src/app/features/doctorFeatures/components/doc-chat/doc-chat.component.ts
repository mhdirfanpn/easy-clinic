import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Token } from 'src/app/interface/token';

@Component({
  selector: 'app-doc-chat',
  templateUrl: './doc-chat.component.html',
  styleUrls: ['./doc-chat.component.css']
})
export class DocChatComponent implements OnInit {

  role : string = "doctor"
  token! : Token
  loader : Boolean = true

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.token = this.authService.getDecodedAccessToken('doctor')
    setTimeout(()=>{
      this.loader = false
    },1000)
  }

}

