// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    //  Name IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh")
