/* Task 2 */

const str = process.argv[2];
const n = Number(process.argv[3]); 

const Cesir = (str, n) => {
    let res = '';
    
    for (let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase() === str[i].toLowerCase()) {
            res += str[i];
        } else {
            const originNum = str[i].charCodeAt(0);
            const num0 = originNum + n;
            let num = num0;
            
            if (originNum < 91 && num0 >= 91) num = (num0 - 91)%26 + 65;
            if (originNum > 96 && num0 >= 123) num = (num0 - 123)%26 + 97;
            
            res += String.fromCharCode(num);
        }
    }
    return res;
}

console.log(Cesir(str, n));

/* Put your code here */
