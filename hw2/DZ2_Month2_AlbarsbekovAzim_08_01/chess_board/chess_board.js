const inp = prompt()
let b = ""
for (let a = 1; a <= inp; a++){
    if (a%2!=0){
        b = b + "#"
    }
    else if (a%2==0){
        b = b + " "
    }
}
let c = ""
for (let d = 1; d <= inp; d++){
    if (d%2!=0){
        c = c + " "
    }
    else if (d%2==0){
        c = c + "#"
    }
}
let e = ""
for (let f = 1; f <= inp; f++){
    if (f==1){
        e = e + b
    }
    else if (f%2!=0 && f!=1){
        e = e + "\n" + b
    }
    else if(f%2==0 && f!=1){
        e = e + "\n" +c
    }
}
console.log(e)
