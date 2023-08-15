import { Component, OnInit, Input,  EventEmitter, Output } from '@angular/core';
import { SocketService } from '../../service/socket.service';

@Component({
  selector: 'app-active-converasation',
  templateUrl: './active-converasation.component.html',
  styleUrls: ['./active-converasation.component.css']
})
export class ActiveConverasationComponent implements OnInit {

  constructor( private sockeService : SocketService) { }

  @Output() createConversation = new EventEmitter<void>();
  @Input() currentUser!: string;
  @Input() role! : string;
  chatter! : any

  ngOnInit(): void {
    if(this.role === "user"){
      this.sockeService.getUserActiveSession(this.currentUser).subscribe(data=>{
        this.chatter = data
      })
    }else{
      this.sockeService.getDoctorActiveSession(this.currentUser).subscribe(data=>{
        this.chatter = data
      })
    }
  }

  newConversation(){
    this.createConversation.emit(this.chatter.id)
    //call a function like create converstion(this.chatter.id)
  }

}
