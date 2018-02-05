import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country/country.model';

@Injectable()
export class CountriesService {

  constructor(private httpClient: HttpClient) { }

  fetchCountriesFlags(setter: (countriesFlagsList: Array<Country>) => void) {
    let url = "https://restcountries.eu/rest/v2/all?fields=name;flag"
    this.httpClient.get(url).subscribe(setter);
  }
}
