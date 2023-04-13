import { LoyaltyUser, Permissions } from "./enums.js";
import { getTopTwoReviews, renderUser, showReviewTotal } from "./utils.js";
const propertyContainer = document.querySelector('.properties');
const footer = document.querySelector('footer');
const container = document.querySelector('.container');
const reviewContainer = document.querySelector('.reviews');
const button = document.querySelector('button');
const mainImageContainer = document.querySelector('.main-image');
let isLoggedIn;
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
        date: '28-03-2023',
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
    permissions: Permissions.ADMIN,
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
isLoggedIn = true;
function showDetails(authorityStatus, element, price) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
properties.forEach((property) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = property.title;
    const image = document.createElement('img');
    image.setAttribute('src', property.image);
    card.appendChild(image);
    showDetails(user.permissions, card, property.price);
    propertyContainer.appendChild(card);
});
button.addEventListener('click', () => addReviews(reviews));
let count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        const topTwo = getTopTwoReviews(array);
        topTwo.forEach(review => {
            const card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = review.stars + ' stars from ' + review.name;
            reviewContainer.appendChild(card);
        });
        container.removeChild(button);
    }
}
class MainProperty {
    constructor(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
}
let yourMainProperty = new MainProperty('images/goa-property.jpg', 'Anjuna', [{
        name: 'Hemanth',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2023'
    }]);
const image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer.appendChild(image);
let date = new Date().toJSON();
let time = date.slice(11, 16);
let currentLocation = ['Bengaluru', time, 27];
footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°C`;
