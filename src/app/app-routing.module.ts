import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user', redirectTo: 'user/home', pathMatch: 'full' },
  {
    path: 'user', 
    loadChildren: () => import('./features/userFeatures/user.module').then(m => m.UserModule)
  },
    { path: '**', redirectTo: 'user/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
