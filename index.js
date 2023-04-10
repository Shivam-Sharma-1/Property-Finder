var reviewEl = document.getElementById('reviews');
var returningUserEl = document.getElementById('returning-user');
var userNameEl = document.getElementById('user');
var reviews = [
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
];
function showReviewTotal(value, reviewer, isLoyalty) {
    var icon = isLoyalty ? '⭐' : '';
    reviewEl.innerHTML = "review total: ".concat(value.toString(), " | last reviewed by ").concat(reviewer, " ").concat(icon);
}
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
var user = {
    userName: 'Shivam',
    isReturning: true
};
function renderUser(isReturning, userName) {
    if (isReturning) {
        returningUserEl.innerHTML = 'back';
    }
    userNameEl.innerHTML = userName + '!';
}
renderUser(user.isReturning, user.userName);
