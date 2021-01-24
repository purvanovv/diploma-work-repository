import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'user/login', component: LoginComponent, data: { title: 'Login' } },
    { path: 'user/register', component: RegisterComponent, data: { title: 'Register' } },
  ]),
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class UserRoutingModule { }
