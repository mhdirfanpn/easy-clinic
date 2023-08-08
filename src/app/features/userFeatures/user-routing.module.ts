import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from 'src/app/features/userFeatures/components/user-home/user-home.component';
import { UserLayoutComponent } from 'src/app/features/userFeatures/components/user-layout/user-layout.component';
import { UserLoginComponent } from 'src/app/features/userFeatures/components/user-login/user-login.component';
import { UserRegisterComponent } from 'src/app/features/userFeatures/components/user-register/user-register.component';
import { UserGuard } from 'src/app/shared/guard/authUser/user.guard';
import { DocDetailsComponent } from 'src/app/features/userFeatures/components/doc-details/doc-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  {
    path: 'register',
    component: UserRegisterComponent,
    canActivate: [UserGuard],
  },
  { path: 'login', component: UserLoginComponent, canActivate: [UserGuard] },
  {
    path: '',
    component: UserLayoutComponent, // Use the common layout for all pages except login and register
    children: [
      { path: 'home', component: UserHomeComponent },
      {
        path: 'docDetails/:id',
        component: DocDetailsComponent,
        canActivate: [UserGuard],
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [UserGuard],
      },
      {
        path: 'editDetails/:id',
        component: UserFormComponent,
        canActivate: [UserGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
