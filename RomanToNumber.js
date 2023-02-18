
function romanToNumber(s){
    let map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);

    let total = 0;

    for(let i = 0; i <s.length; i++) { // 1++ = 2
        let current = map.get(s[i]); // current = 1
        let next = map.get(s[i + 1]); // next = 5

        if(current < next) { // 1 < 5
            total += next - current; // 5 - 1 = 4
            i++; // i = 1
        } else {
            total += current;
        }
    }

    return total;
}

romanToNumber('IVII');