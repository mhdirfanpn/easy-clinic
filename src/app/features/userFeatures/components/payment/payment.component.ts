import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { PaymentService } from '../../service/payment.service';
import { UserData } from 'src/app/interface/user';
import { DoctorData } from 'src/app/interface/doctor';
import { switchMap } from 'rxjs';
import { OrderData } from 'src/app/interface/paymnet';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  
  objectData: any;
  user!: UserData;
  doctor!: DoctorData;
  loader: boolean = true;
  orders!: OrderData;

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap
      .pipe(
        switchMap((params) => {
          this.objectData = JSON.parse(params.get('objectData') as string);
          //getting the user details
          return this.userService.getUserDetails();
        }),
        switchMap((user) => {
          this.user = user;
          //getting the doctor details
          return this.userService.getDocDetails(this.objectData.doctorId);
        })
      )
      .subscribe((doctor) => {
        this.doctor = doctor;
        this.loader = false;
      });
  }

  handlePay() {
    this.paymentService.getOrder().subscribe((data) => {
      this.orders = data;
      console.log(this.orders);
      this.initPayment(data);
    });
  }

  initPayment(data: OrderData) {
    console.log('hello world');
    const options = {
      key: 'rzp_test_JfiruKTJHf8QRk',
      amount: 500 * 100,
      currency: data.currency,
      name: 'QuickDoc.com',
      description: 'Booking session',
      order_id: data.id,
      image: '',
      handler: async (response: any) => {
        // Send the payment ID to your server for verification
        this.paymentService.verify(response).subscribe(
          (verificationResponse) => {
            console.log('Payment verified:', verificationResponse);
            // Handle success, e.g., navigate to a success page
            this.loader = true;
            this.bookAppoiment();
            this.appoinment();
          },
          (error) => {
            console.error('Payment verification failed:', error);
            // Handle verification error, e.g., show an error message
          }
        );
      },
    };

    // Create Razorpay instance and open payment modal
    const rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  }

  //book Appointment
  bookAppoiment() {
    this.userService
      .bookSession(
        this.doctor,
        this.objectData.date,
        this.objectData.time,
        '500'
      )
      .subscribe();
  }

  //add appointment in doctor db
  appoinment() {
    this.userService
      .appoinment(this.doctor, this.objectData.date, this.objectData.time)
      .subscribe(() => {
        this.loader = false;
        this.router.navigate(['/user/success']);
      });
  }
}
