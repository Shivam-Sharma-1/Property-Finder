import { LoyaltyUser } from "./enums.js";
import { renderUser, showReviewTotal } from "./utils.js";
const propertyContainer = document.querySelector('.properties');
const footer = document.querySelector('footer');
const reviews = [
    {
        name: 'Surya',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2023'
    },
    {
        name: 'Sumith',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2023'
    },
    {
        name: 'Harshit',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
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
const properties = [
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
        contact: [+914942310641, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: 'images/darjeeling-property.jpg',
        title: 'Darjeeling Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Darjeeling',
            code: 734101,
            country: 'India'
        },
        contact: [+9163000255, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: 'images/agra-property.webp',
        title: 'Agra Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'Agra',
            code: 282003,
            country: 'India',
        },
        contact: [+91995103221, 'andyluger@aol.com'],
        isAvailable: true
    }
];
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
renderUser(user.isReturning, user.firstName);
properties.forEach((property) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = property.title;
    const image = document.createElement('img');
    image.setAttribute('src', property.image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
});
let date = new Date().toJSON();
let time = date.slice(11, 16);
let currentLocation = ['Bengaluru', time, 27];
footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°C`;
