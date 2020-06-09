import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';


const routes: Routes = [

  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserlistComponent },
  { path: 'users/:id', component: UserdetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
