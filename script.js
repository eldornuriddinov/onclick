



const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
const div = document.querySelector('#box')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const box = document.querySelector('.box img')
const img2 = document.querySelector('.img2')
const img1 = document.querySelector('.img1')



 btn.onclick = () => {
    body.classList.add('red')
    body.classList.remove('blue')
 }

btn2.onclick = () => {
    body.classList.add('blue')
    body.classList.remove('red')
}





btn3.onclick  = () => {


    box.classList.add('open')
    box.classList.remove('close')

}

btn4.onclick = () => {
    box.classList.add('close')
    box.classList.remove('open')
}

btn5.onclick = () => {
    box.classList.add('anim')
}

btn6.onclick = () => {
    img1.classList.add('close2')
    img2.classList.add('open2')
}
