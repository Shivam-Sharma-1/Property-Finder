var reviewEl = document.getElementById('reviews');
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
