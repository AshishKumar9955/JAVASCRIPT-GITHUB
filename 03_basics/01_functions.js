function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(2,6) //(2, "4")=24,  (2, "a")=2a, (1, null)=2

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // console.log("Hitesh");
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)
// console.log("Result:", result);

function loginUserMessage(username){          // (username = "samm") default value
    if(username === undefined){       // (!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Hitesh"));
// console.log(loginUserMessage())

function calculateCartPrice(...num1) {    // (val1, val2, ...num1)= [500, 2000]  rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "sam",
    price: 299
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 400, 500]));