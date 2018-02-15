import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../../shared/models/country/country.model';




@Component({
  selector: 'country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent {

  @Input() country: Country;
  @Output() onCountrySelect: EventEmitter<Country> = new EventEmitter<Country>();

  publishSelection():void{
    console.log("publishSelection");
    this.onCountrySelect.emit(this.country);
  }
}
