import { LoyaltyUser } from "./enums.js"
import { Review } from "./interfaces.js"

const reviewEl = document.getElementById('reviews') as HTMLInputElement
const returningUserEl = document.getElementById('returning-user') as HTMLInputElement
const userNameEl = document.getElementById('user') as HTMLInputElement

function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) : void {
    const icon = isLoyalty === LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewEl.innerHTML = `${value.toString()} review${makeMultiple(value)} | last reviewed by ${reviewer} ${icon}`
}

function renderUser(isReturning : boolean, userName: string ) : void {
    if (isReturning){
        returningUserEl.innerHTML = 'back'
    }
    userNameEl.innerHTML = userName + '!'
}

function makeMultiple(value: number) : string {
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''
}

function getTopTwoReviews(reviews : Review[]) : Review[]  {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)    
    return sortedReviews.slice(0,2)
}

export { renderUser, showReviewTotal, getTopTwoReviews }