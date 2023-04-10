var reviewEl = document.getElementById('reviews');
var returningUserEl = document.getElementById('returning-user');
var userNameEl = document.getElementById('user');
function showReviewTotal(value, reviewer, isLoyalty) {
    var icon = isLoyalty ? '⭐' : '';
    reviewEl.innerHTML = "review total: ".concat(value.toString(), " | last reviewed by ").concat(reviewer, " ").concat(icon);
}
function renderUser(isReturning, userName) {
    if (isReturning) {
        returningUserEl.innerHTML = 'back';
    }
    userNameEl.innerHTML = userName + '!';
}
//# sourceMappingURL=utils.js.map
export { showReviewTotal, renderUser }