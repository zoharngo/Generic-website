import { Store } from '../models/store/store.model';
import { Address } from '../models/address/address.model';


export class StoreFactory {

    public static createStore(): Store {
        let address = new Address();
        let store = new Store();
        store.address = address;
        return store;
    }
}

