import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module'; //shared module
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/features/userFeatures/service/user.service';
import { PaymentService } from './service/payment.service';

import { UserLoginComponent } from 'src/app/features/userFeatures/components/user-login/user-login.component';
import { UserRegisterComponent } from 'src/app/features/userFeatures/components/user-register/user-register.component';
import { UserLayoutComponent } from 'src/app/features/userFeatures/components/user-layout/user-layout.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { UserHomeComponent } from 'src/app/features/userFeatures/components/user-home/user-home.component';
import { HeroOneComponent } from 'src/app/features/userFeatures/components/hero/hero-one/hero-one.component';
import { HeroTwoComponent } from 'src/app/features/userFeatures/components/hero/hero-two/hero-two.component';
import { DocCardsComponent } from './components/doc-cards/doc-cards.component';
import { FooterComponent } from 'src/app/features/userFeatures/components/footer/footer.component';
import { DocDetailsComponent } from 'src/app/features/userFeatures/components/doc-details/doc-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { AppointmnetComponent } from './components/appointmnet/appointmnet.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymnetSuccessComponent } from './components/paymnet-success/paymnet-success.component';

@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    UserLayoutComponent,
    UserNavComponent,
    UserHomeComponent,
    HeroOneComponent,
    HeroTwoComponent,
    FooterComponent,
    DocDetailsComponent,
    UserProfileComponent,
    DocCardsComponent,
    UserFormComponent,
    AppointmnetComponent,
    PaymentComponent,
    PaymnetSuccessComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [UserService, PaymentService],
})
export class UserModule {}
