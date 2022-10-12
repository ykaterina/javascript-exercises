const palindromes = function (input) {
    let half = Math.trunc(input.length / 2);

    input = input.replace(/[^a-z]/gi, '').toLowerCase();

    let isPalindrome = true;
    let j = input.length - 1;
    for(let i = 0; i < half; i++){
        if(input.charAt(i) !== input.charAt(j)){
            isPalindrome = false;
            break;
        }
        j--;
    }

    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
