//singleton 

const JsUser = {
    name :"Danish",
    age : 21,
    location: "Prayagraj",
    email : "ansaridanish7080@gmail.com"
}
console.log(JsUser);
console.log(JsUser["age"]);

JsUser.greeting = function(){

    console.log("Welcome user!")
}
console.log(JsUser.greeting());

JsUser.greeting = function(){

    console.log(`Welcome user! ${ this.name}`)
}
console.log(JsUser.greeting());
