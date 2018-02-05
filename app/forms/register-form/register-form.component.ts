import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../shared/services/countries.service';
import { NewUser } from '../../shared/models/users/new-user.model';
import { Country } from '../../shared/models/country/country.model';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerUser: NewUser = new NewUser();
  countriesList: Array<Country>;
  flagURL: string;

  constructor(private countriesSrv: CountriesService) { }

  ngOnInit() {
    if (!this.countriesList) {
      let callback = (res: Array<any>) => {
        this.countriesList = res;
        console.log(this.countriesList);
      }
      this.countriesSrv.fetchCountriesFlags(callback);
    }
  }

  setFlag($event): void {
    this.flagURL = this.countriesList[event.target.selectedIndex - 1].flag;
  }
}
