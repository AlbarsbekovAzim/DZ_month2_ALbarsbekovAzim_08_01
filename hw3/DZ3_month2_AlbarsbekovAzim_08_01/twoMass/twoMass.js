let a = [5, 4, 9]
let b = [6, "gg", 8, "yes"]
function twoMass(a, b) {
    let c = a.length - b.length
    if (a.length > b.length) {
        console.log('Массив a на ' + c + ' больше массива b')
    }
    else if (b.length > a.length) {
        console.log('Массив b на ' + c + ' больше массива a')
    }
    else if (b.length == a.length) {
        console.log('Массив b равен массиву a')
    }
}
twoMass(a, b)
