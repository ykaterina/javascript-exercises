const fibonacci = function(number) {
    if(number < 0){
        return "OOPS";
    }

    let fib1 = 1;
    let fib2 = 1;
    let last = 0;

    if(number < 3){
        last = 1;
    } else {
        for(let i = 3; i <= number; i++){
            last = fib1 + fib2;
            fib1 = fib2;
            fib2 = last;
        }
    }
    return last;
};
// Do not edit below this line
module.exports = fibonacci;
