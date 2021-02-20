import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '@app/auth/authentication.guard';
import { Shell } from '@app/shell/shell.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'user/login', component: LoginComponent, data: { title: 'Login' } },
    { path: 'user/register', component: RegisterComponent, data: { title: 'Register' } },
    {
      path: 'user/info',
      component: UserInfoComponent,
      data: { title: 'UserInfo' },
      canActivate: [AuthenticationGuard],
    },
  ]),
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class UserRoutingModule {}
