import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  action: string = 'Login';

  loadForm(action: string) {
    console.log('onLoadForm: ' + action);
    this.action = action;
  }
}
