import { LoyaltyUser, Permissions } from "./enums.js";
import { Country, Price } from "./types.js";

interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}

interface User {
    firstName: string;
    lastName: string;
    permissions: Permissions;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
}

interface Properties {
    image: string;
    title: string;
    price: Price;
    location: LocationDetail;
    contact: [number, string];
    isAvailable: boolean;
}

interface LocationDetail {
    firstLine: string;
    city: string;
    code: number;
    country: Country;
}

export { Review, User, Properties, LocationDetail }