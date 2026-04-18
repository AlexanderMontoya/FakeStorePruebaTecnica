export namespace UserModel{
    export interface User {
        id: number;
        email: string;
        username: string;
        password: string;
        phone: string;
        __v: number;
        name: Name;
        address: Address;
    }

    export interface Name {
        firstname: string;
        lastname: string;
    }

    export interface Address {
        city: string;
        street: string;
        number: number;
        zipcode: string;
        geolocation: Geolocation;
    }

    export interface Geolocation {
        lat: string;
        long: string;
    }
}
