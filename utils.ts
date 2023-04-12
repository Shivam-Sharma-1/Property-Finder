import { LoyaltyUser } from "./enums.js"

const reviewEl = document.getElementById('reviews') as HTMLInputElement
const returningUserEl = document.getElementById('returning-user') as HTMLInputElement
const userNameEl = document.getElementById('user') as HTMLInputElement

function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const icon = isLoyalty === LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewEl.innerHTML = `${value.toString()} review${makeMultiple(value)} | last reviewed by ${reviewer} ${icon}`
}

function renderUser(isReturning : boolean, userName: string ) {
    if (isReturning){
        returningUserEl.innerHTML = 'back'
    }
    userNameEl.innerHTML = userName + '!'
}

function makeMultiple(value: number) {
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''
}

export { renderUser, showReviewTotal }