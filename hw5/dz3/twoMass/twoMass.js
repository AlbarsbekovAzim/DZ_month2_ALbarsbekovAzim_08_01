let a = [5, 4, 9]
let b = [6, "gg", 8, "yes"]
const twoMass = (a, b) => { let c = a.length - b.length; a.length > b.length ? console.log('Массив a на ' + c + ' больше массива b') : b.length > a.length ? console.log('Массив b на ' + c + ' больше массива a') : b.length == a.length ? console.log('Массив b равен массиву a') : null }
twoMass(a, b)
