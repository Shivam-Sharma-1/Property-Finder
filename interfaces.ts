import { Permissions } from "./enums.js";

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
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [number, string];
    isAvailable: boolean;
}

export { User, Properties }