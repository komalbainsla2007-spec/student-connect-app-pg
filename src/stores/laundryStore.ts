import { makeAutoObservable } from 'mobx';

class LaundryStore {
    laundryItems = [];

    constructor() {
        makeAutoObservable(this);
    }

    addLaundryItem(item) {
        this.laundryItems.push(item);
    }

    // Additional methods as needed
}

export const laundryStore = new LaundryStore();
