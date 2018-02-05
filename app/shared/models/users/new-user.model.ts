import { User } from "./user.model";
import { Country } from "../country/country.model";

export class NewUser extends User {

    birthDate: Date;
    country: string;

    constructor(public firstName ?: string, public lastName ?: string) {
        super(firstName, lastName);
    }
}