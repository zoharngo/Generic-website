import { Component, Output, EventEmitter } from '@angular/core';
import { User } from './../shared/models/users/user.model';
import { Action } from 'rxjs/scheduler/Action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user = new User('guest');

  @Output() onMenuClick: EventEmitter<string> = new EventEmitter<string>();

  publish() {
    this.onMenuClick.emit(event.srcElement.textContent);
  }

}
