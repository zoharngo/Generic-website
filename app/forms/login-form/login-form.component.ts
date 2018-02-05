import { Component } from '@angular/core';
import { SignInUser } from '../../shared/models/users/signIn-user.model';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  signInUser: SignInUser = new SignInUser();

}
