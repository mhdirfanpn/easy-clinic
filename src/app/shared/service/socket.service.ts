import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CONVERSATION_API, MESSAGE_API, SOCKET_API, DOCTOR_API, USER_API } from '../api.config';
import { TextMessage, ChatUsers, Conversation, Message, NewConversation } from 'src/app/interface/chat';
import { Doctor } from 'src/app/interface/doctor';
import { UserData } from 'src/app/interface/user';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  
  private socket: Socket;
  private url = SOCKET_API; // your server local path

  constructor(private http : HttpClient) {
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
  }


  //connect the socket
  connectSocket(): void {
    this.socket = io(SOCKET_API);
  }
  

  //add user to the socket
  addUser(userId: string): void {
    if (this.socket) {
      this.socket.emit('addUser', userId);
    }
  }


  //emit message to the socket
  sendMessage(data: TextMessage): void {
    if (this.socket) {
      this.socket.emit('sendMessage', data);
    }
  }


  //get message from socket
  getMessage(): Observable<TextMessage> {
    if (this.socket) {
      return new Observable(observer => {
        this.socket.on('getMessage', (data: TextMessage) => {
          observer.next(data);
        });
      });
    }
    return new Observable(); // Provide a default return value if socket is not available
  }
  

  //get the socket online users
  getUsers(): Observable<ChatUsers> {
    if (this.socket) {
      return new Observable(observer => {
        this.socket.on('getUsers', (users: ChatUsers) => {
          observer.next(users);
        });
      });
    }
    return new Observable(); // Provide a default return value if socket is not available
  }


  //get the conversations of a user
  getConversation(id:any): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(`${CONVERSATION_API}/${id}`);
  }


  //get the user messages
  getMessages(id:string): Observable<Message[]> {
    return this.http.get<Message[]>(`${MESSAGE_API}/${id}`);
  }


  //set the user messages
  setMessages(body:Message): Observable<TextMessage> {
    return this.http.post<TextMessage>(`${MESSAGE_API}`,body);
  }


  //get user chats
  getUserChat(id:string): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${CONVERSATION_API}/chatUser/${id}`);
  }


  //get doctor chats
  getDoctorChat(id:string): Observable<UserData[]> {
    return this.http.get<UserData[]>(`${CONVERSATION_API}/chatDoctor/${id}`);
  }


  //get the active session for doctor
  getDoctorActiveSession(id:string): Observable<any> {
    return this.http.get<any>(`${DOCTOR_API}/getActiveSession/${id}`);
  }


  //get the active session for user
  getUserActiveSession(id:string): Observable<any> {
    return this.http.get<any>(`${USER_API}/getActiveSession/${id}`);
  }


  //create a new conversation
  createConversation(body: NewConversation){
    return this.http.post(`${CONVERSATION_API}`,body);
  }

  
}

