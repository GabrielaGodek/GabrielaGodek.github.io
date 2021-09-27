const menuBtn = document.querySelector('.menu')
const open = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')

const arrowDown = document.querySelectorAll('.fa-angle-double-down')
const arrowUp = document.querySelectorAll('.fa-angle-double-up')
const mores = document.querySelectorAll('.projects')
const moreInfo = document.querySelectorAll('.more1')

//navigation
const handNav = () => {
    nav.classList.toggle('active')
    menuBtn.classList.toggle('active')
    close.classList.toggle('hide')
    open.classList.toggle('hide')
}
menuBtn.addEventListener('click', handNav)

//more buttons in project section
for (let i = 0; i < mores.length; i++) {
    mores[i].addEventListener('click', function () {
        moreInfo[i].classList.toggle('hide')
        arrowUp[i].classList.toggle('hide')
        arrowDown[i].classList.toggle('hide')
    })
}


