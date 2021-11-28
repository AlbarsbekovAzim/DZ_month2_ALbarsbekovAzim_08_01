class User{
    constructor(username, age, password) {
        this.username = username
        this.age = age
        this.password = password
    }
    login(){
        let usN = prompt("username: ")
        let age = prompt("age: ")
        let pW = prompt("password: ")
        if (usN == this.username && age == this.age && pW == this.password){
            console.log("success")
        }
        else {
            console.log("undefined")
        }
    }
}
let a = prompt("user: ")
let b = prompt("age: ")
let c = prompt("password: ")
let user = new User(a, b, c)
console.log(user)
user.login()
