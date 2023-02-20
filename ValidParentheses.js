// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

function isValidParenthesis(s){
    let arr = ['()','{}','[]']
    let newS = s.split('');

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < newS.length; j++) {
            if(newS[j]+newS[j+1] === arr[i]) {
                return true;
            }
        }
    }

    return false;
}

isValidParenthesis("(}") // this solution failed in one case '()}{'

var isValid = function(s) {   
    const stack = []; // ')'
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
};

isValid('()}{[]') // this solution passes all cases '