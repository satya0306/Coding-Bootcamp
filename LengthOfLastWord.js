function LengthOfLastWord(s){
    let word = s.split(",").map(function (value) {
        return value.trim();
     });
     let w = word[0].match(/\b(\w+)\b/g)
     return w[w.length - 1].length;
}

LengthOfLastWord("   fly me   to   the moon  ");