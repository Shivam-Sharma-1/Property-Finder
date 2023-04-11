import { LoyaltyUser } from "./enums.js";
const reviewEl = document.getElementById('reviews');
const returningUserEl = document.getElementById('returning-user');
const userNameEl = document.getElementById('user');
function showReviewTotal(value, reviewer, isLoyalty) {
    const icon = isLoyalty === LoyaltyUser.GOLD_USER ? '⭐' : '';
    reviewEl.innerHTML = `review total: ${value.toString()} | last reviewed by ${reviewer} ${icon}`;
}
function renderUser(isReturning, userName) {
    if (isReturning) {
        returningUserEl.innerHTML = 'back';
    }
    userNameEl.innerHTML = userName + '!';
}
export { renderUser, showReviewTotal };
