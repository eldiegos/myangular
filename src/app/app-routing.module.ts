import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { SessionGuard } from './session.guard';


const routes: Routes = [

  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserlistComponent, canActivate: [SessionGuard] },
  { path: 'users/:id', component: UserdetailComponent, canActivate: [SessionGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
