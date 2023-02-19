// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// 1st way to find the longest common prefix
function LongestCommonPrefix(arr){
    if (arr === undefined || arr.length === 0) { return ''; }
    let lcp;
    return arr.reduce((prev,next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        lcp = prev.slice(0, i)
        console.log(lcp)
        return prev.slice(0, i);
    })
}

LongestCommonPrefix(["flower","flow","flight"]);

// 2nd way: find the longest common prefix
function LCP(arr) {
    if(arr === undefined || arr.length === 0) { return ''; }

    for(let i = 0; i < arr[0].length; i++) {
        for(let s of arr){
            if(s[i] !== arr[0][i]) { 
                console.log(s.slice(0,i));
                return s.slice(0,i)
            }
        }
    }
    return arr[0];
}

LCP(["flower","flow","flight"]);