// globe scopes and block scopes
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// console.log(a);
function one(){
    const username = "Hitesh"
    
    function two (){
        const website = "youtube"
        console.log(username);
    }
    //   console.log(website); wrong way

    two()
}
// one()

if (true) {
    const username = "Hitesh"
    if (username === "Hitesh") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ********************************** Intresting **********************************

console.log(addone(5));
function addone(num) {
    return num + 1
}

// addTwo(5) wrong way 
const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(7));