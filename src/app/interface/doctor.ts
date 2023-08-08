
export interface Appointment {
    _id: string;
    date: string;
    times: string[]; // This should be an array of strings representing time slots
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
  