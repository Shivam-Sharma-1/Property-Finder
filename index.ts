import MainProperty from "./classes.js";
import { LoyaltyUser, Permissions } from "./enums.js";
import { LocationDetail, Properties, Review, User } from "./interfaces.js";
import { getTopTwoReviews, renderUser, showReviewTotal } from "./utils.js"

const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('footer')
const container = document.querySelector('.container')
const reviewContainer = document.querySelector('.reviews')
const button = document.querySelector('button')
const mainImageContainer = document.querySelector('.main-image')
let isLoggedIn : boolean

const reviews: Review[] = [
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
]

const user: User = {
    firstName: 'Shivam',
    lastName: 'Sharma',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 20,
    stayedAt: ['Shimla', 'Darjeeling', 'Agra']
}

const properties : Properties[] = [
    {
        image: 'images/shimla-property.webp',
        title: 'Shimla Shack',
        price: 40,
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
        price: 51,
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
        price: 28,
        location: {
            firstLine: 'flat 15',
            city: 'Agra',
            code: 282003,
            country: 'India',
        },
        contact: [+91995103221, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'images/bangalore-property.jpg',
        title: 'Bangalore Shade',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Bangalore',
            code: 560095,
            country: 'India',
        },
        contact: [+919654986498, 'lee34@gmail.com'],
        isAvailable: false
    },
]

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

renderUser(user.isReturning, user.firstName)
isLoggedIn = true

function showDetails(authorityStatus: (boolean | Permissions ), element : HTMLDivElement, price: number, location: LocationDetail, contact: Array<number | string>) : void {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = `Price: ₹${price.toString()}k/night<br>
        Location: ${location.firstLine}, ${location.city}-${location.code}, ${location.country}<br>
        Contact No: ${contact[0]}<br>
        Contact Mail: ${contact[1]}`
        element.appendChild(priceDisplay)
    }
 }

properties.forEach((property) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `<h3>${property.title}</h3>`
    const image = document.createElement('img')
    image.setAttribute('src', property.image)
    card.appendChild(image)
    showDetails(user.permissions, card, property.price, property.location, property.contact)
    propertyContainer.appendChild(card)
})

button.addEventListener('click', () => addReviews(reviews))
let count = 0
function addReviews(array: Review[]) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        topTwo.forEach(review => {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = review.stars + ' stars from ' + review.name
            reviewContainer.appendChild(card)
        })
        container.removeChild(button) 
    }
}

let yourMainProperty = new MainProperty(
    'images/goa-property.jpg', 
    'Anjuna',
    [{
        name: 'Hemanth',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2023'
    }] )

const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)

var currentTime = new Date();
var currentOffset = currentTime.getTimezoneOffset();
var ISTOffset = 330;   // IST offset UTC +5:30 
var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
var hoursIST = ISTTime.getHours()
var minutesIST = ISTTime.getMinutes()
let currentLocation: [string, string, number] = ['Bengaluru', `${hoursIST}:${minutesIST}`, 27]
footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°C`