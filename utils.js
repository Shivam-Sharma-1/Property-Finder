import { LoyaltyUser } from "./enums.js";
const reviewEl = document.getElementById('reviews');
const returningUserEl = document.getElementById('returning-user');
const userNameEl = document.getElementById('user');
function showReviewTotal(value, reviewer, isLoyalty) {
    const icon = isLoyalty === LoyaltyUser.GOLD_USER ? '⭐' : '';
    reviewEl.innerHTML = `${value.toString()} review${makeMultiple(value)} | last reviewed by ${reviewer} ${icon}`;
}
function renderUser(isReturning, userName) {
    if (isReturning) {
        returningUserEl.innerHTML = 'back';
    }
    userNameEl.innerHTML = userName + '!';
}
function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
}
export { renderUser, showReviewTotal };
