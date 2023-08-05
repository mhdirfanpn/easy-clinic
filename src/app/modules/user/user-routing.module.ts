import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from 'src/app/features/userFeatures/user-home/user-home.component';
import { UserLayoutComponent } from 'src/app/features/userFeatures/user-layout/user-layout.component';
import { UserLoginComponent } from 'src/app/features/userFeatures/user-login/user-login.component';
import { UserRegisterComponent } from 'src/app/features/userFeatures/user-register/user-register.component';
import { HeroOneComponent } from 'src/app/features/userFeatures/hero/hero-one/hero-one.component';
import { UserGuard } from 'src/app/shared/guard/authUser/user.guard';

const routes: Routes = [

  {path:"register", component : UserRegisterComponent, canActivate: [UserGuard] },
  {path:"login", component : UserLoginComponent, canActivate: [UserGuard] },
  {
        path: '',
    component: UserLayoutComponent, // Use the common layout for all pages except login and register
    children: [
      // Define other routes here with their respective components
      { path: "home", component:UserHomeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
