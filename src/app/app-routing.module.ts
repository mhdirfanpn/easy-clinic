import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'user', 
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
    { path: '**', redirectTo: 'user/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
