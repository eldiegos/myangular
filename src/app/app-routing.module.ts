import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes: Routes = [

  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserlistComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
