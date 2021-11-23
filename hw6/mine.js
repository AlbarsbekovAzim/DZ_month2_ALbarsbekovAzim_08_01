let c = 0
const upd = () => {
    const countInHtml = document.querySelector('.count')
    countInHtml.innerText = c
}
upd()
const plus = () => {
    c++
    upd()
}
const minus = () => {
    c--
    upd()
}
const stepen2 = () => {
    c = c * c
    upd()
}
const reset = () => {
    c = 0
    upd()
}
