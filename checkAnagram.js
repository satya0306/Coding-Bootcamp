function checkAnagram(s,t){
    if(s.length !== t.length) return false;

    let lookup1 = {};
    let lookup2 = {};

    for(let i = 0; i <s.length; i++) {
        lookup1[s[i]] =  (lookup1[s[i]] || 0) + 1;
        lookup2[t[i]] =  (lookup2[t[i]] || 0) + 1;
    }

    for(let key in lookup1) {
        if(lookup1[key] !== lookup2[key]) return false
    }

    return true;
}

checkAnagram('anagram', 'anagram')