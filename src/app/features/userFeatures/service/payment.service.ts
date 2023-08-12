import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PAYMENT_API } from 'src/app/shared/api.config';
import { Observable } from 'rxjs';
import { OrderData } from 'src/app/interface/paymnet';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {

  constructor(
    private http: HttpClient,
  ) {}

  standalone: boolean = true; //set the default value here

  //orders
  getOrder(): Observable<OrderData> {
    return this.http.get<OrderData>(`${PAYMENT_API}/orders`);
  }

  //verify payment from backend
  verify(response:any){
    console.log(response)
    return this.http.post(`${PAYMENT_API}/verify`,response);
  }
}
