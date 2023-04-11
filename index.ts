import { renderUser, showReviewTotal } from "./utils.js"

const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string 
}[] = [
    {
        name: 'Surya',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2023'
    },
    {
        name: 'Sumith',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2023'
    },
    {
        name: 'Harshit',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2023'
    },
]

const user: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
} = {
    firstName: 'Shivam',
    lastName: 'Sharma',
    isReturning: true,
    age: 20,
    stayedAt: ['Shimla', 'Darjeeling', 'Agra']
}

const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: string;
    isAvailable: boolean;
}[] = [
    {
        image: 'images/shimla-property.webp',
        title: 'Shimla Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Shimla',
            code: 171001,
            country: 'India'
        },
        contact: 'marywinkle@gmail.com',
        isAvailable: true  
    },
    {
        image: 'images/darjeeling-property.jpg',
        title: 'Darjeeling Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Darjeeling',
            code: 343903,
            country: 'India'
        },
        contact: 'garydavis@hotmail.com',
        isAvailable: false 
    },
    {
        image: 'images/agra-property.webp',
        title: 'Agra Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'Agra',
            code: 35433,
            country: 'India',
        },
        contact: 'andyluger@aol.com',
        isAvailable: true
    }
]

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

renderUser(user.isReturning, user.firstName)