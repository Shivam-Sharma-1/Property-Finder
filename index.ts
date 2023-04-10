export {}

const reviewEl = document.getElementById('reviews') as HTMLInputElement
const returningUserEl = document.getElementById('returning-user') as HTMLInputElement
const userNameEl = document.getElementById('user') as HTMLInputElement

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const icon = isLoyalty ? '⭐' : ''
    reviewEl.innerHTML = `review total: ${value.toString()} | last reviewed by ${reviewer} ${icon}`
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const user = {
    userName: 'Shivam',
    isReturning: true
}

function renderUser(isReturning : boolean, userName: string ) {
    if (isReturning){
        returningUserEl.innerHTML = 'back'
    }
    userNameEl.innerHTML = userName + '!'
}

renderUser(user.isReturning, user.userName)