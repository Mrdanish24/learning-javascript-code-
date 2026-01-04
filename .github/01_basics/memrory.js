// stack (premitive) , heap (non primitive )

let myName = "Danish"

let anotherName = myName

anotherName = "Aman"

console.log(myName);
console.log(anotherName);


let clientOne = {
    email: "ansari@1gamil.com",
    userName: "danish01"
};

let clientTwo = clientOne;

clientTwo.email = "danish@gmail.com";

console.log(clientOne);
console.log(clientTwo);