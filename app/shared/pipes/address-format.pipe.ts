import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../models/address/address.model';

@Pipe({
  name: 'addressFormat'
})
export class AddressFormatPipe implements PipeTransform {
  transform(address: Address): String {
    let addressInfo = `${address.streetNumber} ${address.streetName} st. ${address.cityName}
    / Postal Code - ${address.postalCode}
    / Email - ${address.email} `;
    return addressInfo;
  }
}
