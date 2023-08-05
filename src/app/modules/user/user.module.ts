import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { UserService } from 'src/app/features/userFeatures/service/user.service';

import { UserLoginComponent } from 'src/app/features/userFeatures/user-login/user-login.component';
import { UserRegisterComponent } from 'src/app/features/userFeatures/user-register/user-register.component';
import { UserLayoutComponent } from 'src/app/features/userFeatures/user-layout/user-layout.component';
import { UserNavComponent } from 'src/app/features/userFeatures/user-nav/user-nav.component';
import { UserHomeComponent } from 'src/app/features/userFeatures/user-home/user-home.component';
import { HeroOneComponent } from 'src/app/features/userFeatures/hero/hero-one/hero-one.component';
import { HeroTwoComponent } from 'src/app/features/userFeatures/hero/hero-two/hero-two.component';
import { DocCardsComponent } from 'src/app/features/userFeatures/doc-cards/doc-cards.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    UserLayoutComponent,
    UserNavComponent,
    UserHomeComponent,
    HeroOneComponent,
    HeroTwoComponent,
    DocCardsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService]
})
export class UserModule { }
