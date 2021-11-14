let num = 0
const butplus = document.querySelector(".plus")
const butminus = document.querySelector(".minus")
const butnum = document.querySelector(".num")
butplus.addEventListener('click', () => {
    num++
})
butminus.addEventListener('click', () => {
    num--
})
butnum.addEventListener('click', () => {
    console.log(num)
})
