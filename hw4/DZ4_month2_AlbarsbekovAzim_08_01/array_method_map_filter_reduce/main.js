a = [
    {name: "gon", age: 12, money: 30000},
    {name: "killua", age: 12, money: 200000},
    {name: "kurapika", age: 16, money: 15000},
    {name: "leorio", age: 25, money: 12000}
]
//кому сколько лет и какой у него бюджет
const b = a.map(c => `${c.name} (${c.age}) have ${c.money}`)
console.log(b)
//кто совершеннолетний
const b2 = a.filter(c2 => c2.age >= 18)
console.log(b2)
//общий бюджет
const b3 = a.reduce((d, c3) => d = d + c3.money, 0)
console.log(b3)
