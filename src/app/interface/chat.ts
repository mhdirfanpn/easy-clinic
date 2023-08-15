export interface Conversation {
  _id: string;
  members: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Message {
    _id?: string;
    conversationId?: string;
    sender?: string;
    text: string;
    createdAt?: string | number;
    updatedAt?: string;
    __v?: number;
  }
  
export interface TextMessage {
    recieverId: any;
    senderId: string;
    text: string
}

export interface ChatUsers{
    socketId:String;
    userId: String
}

export interface NewConversation {
  senderId : string,
  receiverId : string
}

