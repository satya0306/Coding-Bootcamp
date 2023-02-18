// Given an integer x, return true if x is a palindrome, and false otherwise.

function numberIsPalindrome(x){
    let y = x.toString();
    let i = 0;
    let halfWay = Math.floor(y.length/2); //2
    // j=3; 3>=2;3--
    for(let j = y.length - 1; j >= halfWay; j--){
        if(y[i] !== y[j]){ // 1 !== 0
            return false;
        }
        i++;
    }
    
    return true;
}

numberIsPalindrome(1010);