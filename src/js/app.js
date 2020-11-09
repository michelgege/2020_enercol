console.log('js ok')

let button_part = document.querySelector('.menu_button_part')
let menu = document.querySelector('.menu')

document.querySelector('.menu_button').addEventListener('click', () => {
    menu.classList.toggle('open')
})