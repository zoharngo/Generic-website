import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country/country.model';

@Injectable()
export class CountriesService {

  constructor(private httpClient: HttpClient) { }

  fetchCountriesFlags() {
    let url = "https://restcountries.eu/rest/v2/all?fields=name;flag"
    return this.httpClient.get<Array<Country>>(url);
  }
}
