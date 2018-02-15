import { Country } from "../country/country.model";

export class Address extends Country {
    cityName: string;
    streetName: string;
    streetNumber: number;
    postalCode: string;
    email: string;

    // Not working getting excption addressInfo is not afunction .
    public addressInfo(): string {
        let addressInfo = `${this.streetNumber} ${this.streetName} st. - ${this.cityName}
        / Postal Code - ${this.postalCode}
        / email - ${this.email} `;
        return addressInfo;
    }
}