const a = prompt()
const b = prompt()
function num(a, b) {
    if (a < b){
        console.log(a)
    }
    else if (b < a) {
        console.log(b)
    }
    else if (a == b) {
        console.log("=")
    }
    else {
        console.log("error")
    }
}
num(a, b)
