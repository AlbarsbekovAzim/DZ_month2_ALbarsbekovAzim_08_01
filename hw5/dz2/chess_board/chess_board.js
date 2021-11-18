const inp = prompt()
let b = ""
let c = ""
let e = ""
for (let a = 1; a <= inp; a++){ a%2!=0 ? b += "#" : a%2==0 ? b += " " : null ; a%2!=0 ? c += " " : a%2==0 ? c += "#" : null }
for (let f = 1; f <= inp; f++){ f==1 ? e += b : f%2!=0 && f!=1 ? e = e + "\n" + b : f%2==0 && f!=1 ? e = e + "\n" + c : null }
console.log(e)
