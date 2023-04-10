import { renderUser, showReviewTotal } from "./utils.js";
const reviews = [
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
];
const user = {
    firstName: 'Shivam',
    lastName: 'Sharma',
    isReturning: true,
    age: 20,
    stayedAt: ['Shimla', 'Darjeeling', 'Agra']
};
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
renderUser(user.isReturning, user.firstName);
