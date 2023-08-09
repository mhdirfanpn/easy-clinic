import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user', redirectTo: 'user/home', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/userFeatures/user.module').then((m) => m.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/adminFeatures/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  {
    path: 'doctor',
    loadChildren: () =>
      import('./features/doctorFeatures/doctor.module').then(
        (m) => m.DoctorModule
      ),
  },
  { path: '**', redirectTo: 'user/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
