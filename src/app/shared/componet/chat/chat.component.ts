import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SocketService } from '../../service/socket.service';
import { Token } from 'src/app/interface/token';
import { Conversation , Message} from 'src/app/interface/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {

  @Input() role!: string;
  @Input() token!: Token;
  conversations!: Conversation[]
  currentChat!: Conversation | null
  messages: Message[] = [];
  newMessage!: string
  active: any = null;
  arrivalMessage: any | null = null;
  activeConversation: any | null = null;
  loader : Boolean = false
  isActive : Boolean = false

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.connectSocket();
    this.getMessageFromSocket();
    this.socketService.addUser(this.token.id);
    this.socketService.getUsers().subscribe((users) => console.log(users));
    this.fetchConversations();
    this.loader = false
  }


  //get message from socket
  getMessageFromSocket() {
    this.socketService.getMessage().subscribe((data) => {
      this.arrivalMessage = {
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      };
      if (
        this.arrivalMessage &&
        this.currentChat?.members.includes(this.arrivalMessage.sender)
      ) {
        this.messages.push(this.arrivalMessage);
      }
    });
  }


  // Fetch conversations using HTTP requests
  // Assign the response to this.conversations
  fetchConversations(): void {

    this.socketService.getConversation(this.token.id).subscribe((data) => {
      this.conversations = data;
    });
  }


  switchChat(conversation: any): void {
    this.currentChat = conversation;
    this.fetchMessages(conversation._id);
    this.isActive = true
  }


  // Fetch messages for the specified conversation using HTTP requests
  // Assign the response to this.messages
  fetchMessages(conversationId: string): void {
    this.socketService.getMessages(conversationId).subscribe((data) => {
      this.messages = data;
    });
  }

  //send message
  sendMessage(): void {
    if (!this.currentChat) {
      return;
    }

    const message = {
      sender: this.token.id,
      text: this.newMessage,
      conversationId: this.currentChat._id,
    };

    //find the reciever id
    const recipientId = this.currentChat.members.find(
      (member: any) => member !== this.token.id
    );

    // Update messages for the sender's side
    this.messages.push({
      sender: this.token.id,
      text: this.newMessage,
      createdAt: Date.now(),
    });


    // Send the message through the socket
    this.socketService.sendMessage({
      senderId: this.token.id,
      recieverId: recipientId,
      text: this.newMessage,
    });

    // Make HTTP request to send message
    this.socketService.setMessages(message).subscribe()


    this.newMessage = ''; // Clear the input
  }

  handleCreateConversation(id:any) {
    const body = {
      senderId : this.token.id,
      receiverId : id
    }
    this.socketService.createConversation(body).subscribe((data)=>{
      console.log(data)
      this.fetchConversations()
    })
  }
}
