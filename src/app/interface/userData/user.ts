export interface UserData {
    userName?: string;
    email: string;
    date?: Date;
    number?: string;
    password: string;
    success?: boolean;
    message?: string;
  }



  export interface ApiResponse {
    success?: boolean;
    message?: string;
    token: string; 
  }