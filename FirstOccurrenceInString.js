// Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, 
// return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

var strStr = function(haystack, needle) {
    if (needle.length == 0) return 0;

    for(let i=0; i<haystack.length;i++){ // i=0, i<7, i++
        let k = i, j = 0;                // k=0;

        while(haystack[k] === needle[j] && j < needle.length){  // s === s && 0 < 3 // a === a && 1 < 3 // d === d && 2 < 3
            k++;                                                // k = 1 // k = 2 // k = 3
            j++;                                                // j = 1 // j = 2 // j = 3
        }

        if (j == needle.length) return i; // 3 === 3 return 0;
    }
    console.log(i);
    return -1;
}