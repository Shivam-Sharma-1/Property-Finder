const reviewEl = document.getElementById('reviews') as HTMLInputElement
const returningUserEl = document.getElementById('returning-user') as HTMLInputElement
const userNameEl = document.getElementById('user') as HTMLInputElement

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const icon = isLoyalty ? '⭐' : ''
    reviewEl.innerHTML = `review total: ${value.toString()} | last reviewed by ${reviewer} ${icon}`
}

function renderUser(isReturning : boolean, userName: string ) {
    if (isReturning){
        returningUserEl.innerHTML = 'back'
    }
    userNameEl.innerHTML = userName + '!'
}

export { showReviewTotal, renderUser }