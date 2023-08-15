import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../../service/socket.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  constructor(private socketService : SocketService) { }

  @Input() conversation: any;
  @Input() currentUser!: string;
  @Input() role! : string;
  chatterId! : string;
  chatter:any

  ngOnInit(): void {

    this.chatterId = this.conversation.members.find((m:any) => m !== this.currentUser);
    
    if(this.role === "user"){
        this.userChat()
    }else{
      this.doctorChat()
    }
  }


  //get the user chat
  userChat(){
    this.socketService.getDoctorChat(this.chatterId).subscribe(data=>{
      this.chatter = data
    })
  }


  //get the doctor chat
  doctorChat(){
    this.socketService.getUserChat(this.chatterId).subscribe(data=>{
      this.chatter = data
    })
  }

}
