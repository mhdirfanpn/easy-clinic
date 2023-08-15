export interface Appointment {
  _id: string;
  date: string;
  times: string[]; // This should be an array of strings representing time slots
}

export interface Appointments {
  _id: string;
  bookedDate: string;
  doctorId: string;
  doctorName: string;
  endTime: string;
  link: string;
  plan: string;
  sessionDate: string;
  startTime: string;
  timeSlot: string;
  userId: string;
  userName: string;
  __v: number;
}



export interface Doctor {
  date: string;
  email: string;
  experience: string;
  fullName: string;
  isVerified: boolean;
  number: string;
  password: string;
  profilePic?: string;
  register: string;
  specialization: string;
  timeSlot: string[]; // This should be an array of strings representing time slots
  __v: number;
  _id: string;
  appointments?: Appointment[]; // This property holds an array of appointments
}

export interface DoctorData {
  date: string;
  email: string;
  experience: string;
  profilePic?: string;
  fullName: string;
  number: string;
  password?: string;
  register?: string;
  specialization?: string;
  success?: string;
  message?: string;
}
