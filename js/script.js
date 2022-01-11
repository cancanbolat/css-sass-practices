//SHOW SCROLL TOP
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 200)
        scrollTop.classList.add('scroll-top')
    else
        scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)


// SCROLL TOP
document.getElementById('scroll-top').addEventListener('click', () => {
    window.scrollTo(0, 0)
})