//user interface
export interface UserData {
  _id?: string;
  userName: string;
  email: string;
  date: Date;
  number: string;
  password: string;
  profilePic?: string;
  success?: boolean;
  message?: string;
  isBlocked?: boolean;
}

//interface for api response
export interface ApiResponse {
  success?: boolean;
  message?: string;
  token: string;
  adminToken: string;
  doctorToken: string;
}
