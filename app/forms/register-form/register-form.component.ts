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
  countryListMode = false;
  selectedCountry: Country;

  constructor(private countriesSrv: CountriesService) {
    this.selectedCountry = new Country();
    this.selectedCountry.name = "";
    this.selectedCountry.flag = "";
  }

  ngOnInit() {
    if (!this.countriesList) {
      this.countriesSrv.fetchCountriesFlags().subscribe((res: Country[]) => {
        this.countriesList = res;
        this.selectedCountry = this.countriesList.find((country) => {
          return country.name.indexOf('Israel') > -1;
        });

        console.log("stop");
      });
    }
  }

  onSelectCountry(): void {
    this.countryListMode = !this.countryListMode;
  }

  setCountrySelection(country: Country): void {
    console.log(country);
    this.onSelectCountry();
    this.registerUser.country = country.name;
    this.selectedCountry = country;
  }
}
